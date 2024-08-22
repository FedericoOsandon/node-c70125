const { Schema, model } = require('mongoose')

const collectionName = 'products'

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: String,
    price: Number,
    stock: Number,
    category: {
        type: String,
        required: true
    },
    create: {
        type: Date,
        default: Date.now()
    }
})

const productModel = model(collectionName, productSchema)

module.exports = {
    productModel
}