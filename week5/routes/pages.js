const express = require('express');
const router = express.Router();
authController = require('../controllers/auth');

// Executes when the main page is accessed
router.get('/', (req, res) => {
    res.render("index");
});

// Executes when the register page is accessed
router.get('/register', (req, res) => {
    res.render("register");
});

router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;
