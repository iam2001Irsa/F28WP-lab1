const express = require('express');
const router = express.Router();

// Executes when the main page is accessed
router.get('/', (req, res) => {
    res.render("index");
});

// Executes when the register page is accessed
router.get('/register', (req, res) => {
    res.render("register");
});

module.exports = router;
