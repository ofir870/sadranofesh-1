
const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ofirofir870:buckfastt@fscluster-nunpz.mongodb.net/sadranofesh?retryWrites=true&w=majority', { useNewUrlParser: true })
    
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db