const express = require('express')

const Orderctrl = require('../controller/order-controller')

const router = express.Router()

router.post('/order', Orderctrl.createOrder)


router.post('/order-by-id/:id', Orderctrl.getOrderById)
router.post('/get-Orders', Orderctrl.getAllOrders)
router.post('/get-not-aproved-orders', Orderctrl.getNotAprovedOrders)
router.put('/update-order/:id', Orderctrl.updateOrder)
router.delete('/delete-order/:id', Orderctrl.deleteOrder)
router.post('/get-orders-by-username/:username', Orderctrl.getOrdersByUserName)

module.exports = router