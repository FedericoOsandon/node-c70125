const { connect } = require('mongoose')
const { cartModel } = require('../models/carts.model')

exports.connectDB = async () => {
    console.log('base de datos connectada')
    await connect('mongodb://127.0.0.1:27017/c70125')

    // crear un carrito -> router POST -> manager create
    // const respose = await cartModel.create({products: []})

    // agregar producto -> router cart put prodcut en el carrito
    // const cart = await cartModel.findById({_id: '66c7c9cd4fd58f55ebcd9c60'})
    // cart.products.push({product: '66c7c8d55ac9d0311d2cc22c', quantity: 5})
    // const respuesta = await cartModel.findByIdAndUpdate({_id: '66c7c9cd4fd58f55ebcd9c60'}, cart)


    // router get para traer un carrito por id
    const cart = await cartModel.findOne({_id: '66c7c9cd4fd58f55ebcd9c60' })
  
    console.log(JSON.stringify(cart, null, 2))
} 

// manager crud mongo
// schema
// router