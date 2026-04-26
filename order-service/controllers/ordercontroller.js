const razorpay = require("../config/razorpay");
const RazorpayPayment = require("../models/razorpayModel");
const Order = require("../models/orderModel");
const crypto = require("crypto");

// 🔹 Create Order
exports.createOrder = async (req, res) => {
    try {
        const user_id = req.user.id; // ✅ FIXED
        const { amount } = req.body;

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: "receipt_" + Date.now(),
        };

        const rzpOrder = await razorpay.orders.create(options);

        await RazorpayPayment.create({
            user_id,
            razorpay_order_id: rzpOrder.id,
            amount,
        });

        res.json({
            success: true,
            order: rzpOrder,
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 🔹 Verify Payment
exports.verifyPayment = async (req, res) => {
    try {
        const user_id = req.user.id; 

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            product_id,
            quantity,
            price,
        } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expected = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");

        if (expected === razorpay_signature) {

            // ✅ Save Order
            const order = await Order.create({
                user_id,
                product_id,
                quantity,
                price,
                status: "paid",
            });

            await RazorpayPayment.findOneAndUpdate(
                { razorpay_order_id },
                {
                    razorpay_payment_id,
                    razorpay_signature,
                    status: "success",
                    order_id: order._id,
                }
            );

            return res.json({
                success: true,
                message: "Payment success & order saved",
                order,
            });

        } else {

            await RazorpayPayment.findOneAndUpdate(
                { razorpay_order_id },
                {
                    razorpay_payment_id,
                    razorpay_signature,
                    status: "failed",
                }
            );

            return res.status(400).json({
                success: false,
                message: "Payment failed",
            });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
