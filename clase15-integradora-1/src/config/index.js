const { connect } = require('mongoose')

exports.connectDB = async () => {
    console.log('base de datos connectada')
    await connect('mongodb://127.0.0.1:27017/c70125')
} 