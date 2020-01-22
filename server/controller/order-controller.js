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

// updateOrder = async (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a body to update',
//         })
//     }

//     User.findOne({ _id: req.params.id }, (err, user) => {
//         if (err) {
//             return res.status(404).json({
//                 err,
//                 message: 'Order not found!',
//             })
//         }
//         user.name = body.name
//         user.password = body.password
//         user.message = body.message
//         user.email = body.email
//         user
//             .save()
//             .then(() => {
//                 return res.status(200).json({
//                     success: true,
//                     id: user._id,
//                     message: 'User updated!',
//                 })
//             })
//             .catch(error => {
//                 return res.status(404).json({
//                     error,
//                     message: 'User not updated!',
//                 })
//             })
//     })
// }


getAllOrders = async (req, res) => {
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


getNotAprovedOrders = async (req, res) => {
    await Order.find({aproved:"waiting"}, (err, order) => {
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


updateOrder = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Order.findOne({ _id: req.params.id }, (err, order) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Order not found!',
            })
        }
        order.aproved = body.aproved 
        order
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: order._id,
                    message: 'Order updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Order not updated!',
                })
            })
    })
}
getOrderById = async (req, res) => {
    await Order.findOne({ _id: req.params.id }, (err, order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!order) {
            return res
                .status(404)
                .json({ success: false, error: `Order not found` })
        }
        return res.status(200).json({ success: true, data: order })
    }).catch(err => console.log(err))
}


module.exports = {
    createOrder,
    getAllOrders,
    getNotAprovedOrders,
    getOrderById,
    updateOrder
}