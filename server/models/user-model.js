
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true ,unique: true, minlength : 3 , trim :true },
        password: { type: String, required: true ,minlength: 3, trim: true},
        message: { type: Array, required: false },
        email: { type: String, required: true , minlength: 5}
    },

    { timestamps: true },
)

module.exports = mongoose.model('users', User)