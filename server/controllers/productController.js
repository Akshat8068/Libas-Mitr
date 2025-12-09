import Product from "../models/productModel.js"

const getProducts = async (req, res) => {
    let products = await Product.find()
    if (!products) {
        res.status(200)
        throw new Error("No Products Found");

    } else {
        res.status(200).json(products)
    }
}
const getProduct = async (req, res) => {
    let product = await Product.findById(req.params.pid)
    if (!product) {
        res.status(200)
        throw new Error("No Product Found");

    } else {
        res.status(200).json(product)
    }
}

const productContoller = { getProduct, getProducts }

export default productContoller