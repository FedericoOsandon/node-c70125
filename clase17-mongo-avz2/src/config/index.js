const { connect } = require('mongoose')

const { orderModel } = require('../models/order.models');



const ordenes = [
    {
      name: "Margherita",
      size: "small",
      price: 8,
      quantity: 2,
      date: "2021-01-13T09:08:13Z"
    },
    {
      name: "Pepperoni",
      size: "medium",
      price: 12,
      quantity: 1,
      date: "2020-05-13T09:08:13Z"
    },
    {
      name: "Hawaiian",
      size: "medium",
      price: 16,
      quantity: 3,
      date: "2022-03-11T09:08:13Z"
    },

    {
        name: "Hawaiian",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-14T09:08:13Z"
    },
    {
        name: "Margherita",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-11T09:08:12Z"
    },
    {
        name: "Pepperoni",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-15T09:08:13Z"
    },
    {
        name: "Pepperoni",
        size: "large",
        price: 25,
        quantity: 3,
        date: "2022-03-18T09:08:12Z"
    },
    {
        name: "Margherita",
        size: "large",
        price: 30,
        quantity: 3,
        date: "2022-03-21T09:08:12Z"
    }
  ];

exports.connectDB = async () => {
    console.log('base de datos connectada')
    await connect('mongodb://127.0.0.1:27017/c70125')

    // insertar orders
    // let result = await orderModel.insertMany(ordenes)
    // console.log(result)
    
    // solicitar las ordenes
    // const orders = await orderModel.find()
    // console.log(orders)

    // stages -> pasos 
    // http://localhost:8080/api/reports?tamanio=
    // const tamanioPizza = 'small'

    // let ordersStages = await orderModel.aggregate([
    //     {
    //         $match: { size: tamanioPizza }
    //     }, // paso uno
    //     {
    //         $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } }
    //     }, //paso 2
    //     {
    //       $sort: { totalQuantity: -1 }  
    //     },
    //     {
    //         $group: { _id: 1, orders: { $push: "$$ROOT" } }
    //     },
    //     { 
    //         $project: { "_id": 0, orders: "$orders" }
    //     },
    //     {
    //         $merge: { into: 'reports'}
    //     }
    // ])

    // console.log(ordersStages)
} 

