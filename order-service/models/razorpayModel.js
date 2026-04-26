const mongoose = require("mongoose");

const razorpaySchema = new mongoose.Schema({
  user_id: String,
  name: String, // optional
  order_id: String,
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  amount: Number,
  status: {
    type: String,
    enum: ["created", "success", "failed"],
    default: "created",
  },
}, { timestamps: true });

module.exports = mongoose.model("RazorpayPayment", razorpaySchema);