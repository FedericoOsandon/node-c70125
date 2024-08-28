const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')



const userCollection = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        index: true
    },
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String
})

userSchema.plugin(mongoosePaginate)
const userModel = model(userCollection, userSchema)

module.exports = {
    userModel
} 