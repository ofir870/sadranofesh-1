const express = require('express')

const Orderctrl = require('../controller/order-controller')

const router = express.Router()

router.post('/order', Orderctrl.createOrder)

// router.put('/user/:id', Orderctrl.updateUser)
// router.delete('/user/:id', Orderctrl.deleteUser)
// router.post('/user-by-id/:id', Orderctrl.getUserById)
router.post('/get-Orders', Orderctrl.getOrders)

module.exports = router