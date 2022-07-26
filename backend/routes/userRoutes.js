const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')

// Routes used in the serverjs routes section
router.post('/', registerUser)

router.post('/login', loginUser)

module.exports = router