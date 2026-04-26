const express = require("express");
const { addtocarts, getcart } = require("../controllers/cartcontroller");
const auth = require("../middleware/authmiddleware");
const router = express.Router();


router.post("/addtocart",auth,addtocarts)
router.get("/getcart",auth,getcart)

module.exports = router;