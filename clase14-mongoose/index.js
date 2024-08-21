const { connect } = require('mongoose')

module.exports.connectDB = async () => {
    console.log('Base de datos conectada')
    return await connect('mongodb+srv://Federico:Federico1**@cluster0.r3sreep.mongodb.net/c70125?retryWrites=true&w=majority&appName=Cluster0')
}

