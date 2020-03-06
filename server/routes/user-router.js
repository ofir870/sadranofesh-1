const express = require('express')

const Userctrl = require('../controller/user-controller')


const router = express.Router()

router.post('/user', Userctrl.createUser)
router.put('/user/:id', Userctrl.updateUser)
router.delete('/user/:id', Userctrl.deleteUser)
router.post('/user-by-id/:id', Userctrl.getUserById)
router.post('/get-users', Userctrl.getUsers)
router.post('/get-user-by-username/:username/:password', Userctrl.getUserByUserName)

module.exports = router