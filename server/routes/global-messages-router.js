const express = require('express')

const GlobalMessages = require('../controller/global-messages-controller')

const router = express.Router()


 router.post("/global-messages", GlobalMessages.createMessage)
 router.post('/global-messages/get-messages', GlobalMessages.getMessages)
 
  router.delete('/global-messages/delete-message/:id', GlobalMessages.deleteMessage)    
// router.post('/order-by-id/:id', Orderctrl.getOrderById)
// router.post('/get-not-aproved-orders', Orderctrl.getNotAprovedOrders)
// router.post('/get-aproved-orders', Orderctrl.getAprovedOrders)
// router.put('/update-order/:id', Orderctrl.updateOrder)
// router.post('/get-orders-by-username/:username', Orderctrl.getOrdersByUserName)

module.exports = router