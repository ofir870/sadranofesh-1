
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true ,unique: true, minlength : 3 , trim :true },
        password: { type: String, required: true ,minlength: 3, trim: true}
    },

    { timestamps: true },
)

module.exports = mongoose.model('users', User)