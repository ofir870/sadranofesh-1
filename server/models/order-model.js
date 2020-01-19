const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        userName: { type: String, required: true },
        price: { type: String},
        aproved: { type: String, required: true },
        isFromBeerot:{type: Boolean, required:true},
        note: { type: String, required: false }
        
    },

    { timestamps: true },
)

module.exports = mongoose.model('orders', Order)