const Order = require ("../models/order-model")


    
createOrder = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a order',
            
        })
    }

    const order = new Order(body)

    if (!order) {
        return res.status(400).json({ success: false, error: err })
    }

    order
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: order._id,
                message: 'order created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'order not created!',
            })
        })
}


getOrders = async (req, res) => {
    await Order.find({}, (err, order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!order.length) {
            return res
                .status(404)
                .json({ success: false, error: `Order not found` })
        }
        return res.status(200).json({ success: true, data: order })
    }).catch(err => console.log(err))
}

module.exports = {
    createOrder,
    getOrders
}