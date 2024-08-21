const { productModel } = require("../../models/products.model")

class ProductManagerMongo {
    constructor(){
        this.model = productModel
    }
    getProducts   = async () => await this.model.find({})
    getProduct    = async opts => await this.model.findOne(opts) // {}
    createProduct = async newProduct => await this.model.create(newProduct)
    deleteProduct = async () => {}
    updateProduct = async () => {}
}

module.exports = {
    ProductManagerMongo
}