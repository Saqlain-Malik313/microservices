const Product = require("../models/productmodel")

const getproduct = async (req, res) => {
  try {
    const product = await Product.find()   // ✅ add await
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getproductbyid = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)  // ✅ add await
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getproduct,
  getproductbyid
}