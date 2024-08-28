const { Schema, model } = require('mongoose')

const orderCollections = 'orders'

const orderSchema = new Schema({
    name: String,
    size: {
        type: String,
        // users role 
        enum: ['small',"medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

const orderModel = model(orderCollections, orderSchema)

module.exports = {
    orderModel
}