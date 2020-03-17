const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GlobalMessages = new Schema({ 
    
    
    globalMessages: {type: String}

}
    , { timestamps: true })

module.exports = mongoose.model('global-message', GlobalMessages)