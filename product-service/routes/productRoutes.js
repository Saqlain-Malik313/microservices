const express = require("express");
const router = express.Router();

const {getproduct,getproductbyid} = require("../controllers/productcontroller")




router.get("/getproducts",getproduct)
router.get("/getproductbyid/:id",getproductbyid)

module.exports = router;