const Product = require("../models/productmodel")


const getproduct = async (req,res) => {
    try {
        const product = Product.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    
    }
}

const getproductbyid = async (req,res) => {
    try {
        const product = Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    
    }
}

module.exports = {
    getproduct,
    getproductbyid
    }