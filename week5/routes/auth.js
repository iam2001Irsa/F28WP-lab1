const express = require('express');
const router = express.Router();
const authController = require('..//controllers/auth');

// Executes when the main page is accessed
router.post('/register', authController.register);


module.exports = router;
