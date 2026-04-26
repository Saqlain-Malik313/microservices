const Cart = require("../models/cartschema");

// 🔹 Add to Cart
const addtocarts = async (req, res) => {
    try {
        const user_id = req.user.id; // ✅ FIXED (secure)
        const { product_id, quantity, price } = req.body;

        const cartItem = await Cart.findOne({ user_id, product_id });

        if (cartItem) {
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            await Cart.create({
                user_id,
                product_id,
                quantity,
                price
            });
        }

        res.json({
            success: true,
            message: "Item added to cart"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// 🔹 Get Cart
const getcart = async (req, res) => {
    try {
        const user_id = req.user.id; // ✅ FIXED

        const cartItems = await Cart.find({ user_id });

        res.json({
            success: true,
            cart: cartItems
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    addtocarts,
    getcart
};