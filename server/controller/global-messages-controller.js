const GlobalMessages = require ("../models/global-messages-model")

createMessage = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body',
            
        })
    }

    const newGlobalMessage = new GlobalMessages(body)

    if (!newGlobalMessage) {
        return res.status(400).json({ success: false, error: err })
    }

    newGlobalMessage
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: newGlobalMessage._id,
                message: 'global message created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'global message created!',
            })
        })
}

getMessages = async (req, res) => {
    await GlobalMessages.find({}, (err, data) => {
        console.log(data)
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!data.length) {
            return res
                .status(400)
                .json({ success: false, error: `Order not found` })
        }
        return res.status(200).json({ success: true, data: data })
    }).catch(err => console.log(err))
}

deleteMessage = async (req, res) => {
    await GlobalMessages.findOneAndDelete({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: message })
    }).catch(err => console.log(err))
}



module.exports = {

    createMessage,
    getMessages,
    deleteMessage
    // getOrderById
 

    
}