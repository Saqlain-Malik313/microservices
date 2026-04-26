const express = require("express");
const router = express.Router();

const {
  createOrder,
  verifyPayment,
} = require("../controllers/ordercontroller");
const auth = require("../middleware/authmiddleware");

router.post("/create-order",auth, createOrder);
router.post("/verify-payment",auth, verifyPayment);

module.exports = router;