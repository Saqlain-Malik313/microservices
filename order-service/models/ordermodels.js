const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: { // 👈 NEW FIELD
    type: String,
    enum: ["pending", "paid", "cancelled"],
    default: "pending",
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);