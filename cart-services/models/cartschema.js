const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
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
}, { timestamps: true });

const Cart =    mongoose.model("Cart", cartSchema);

module.exports = Cart;