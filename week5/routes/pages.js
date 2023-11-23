const express = require('express');
const router = express.Router();
authController = require('../controllers/auth');

// Executes when the main page is accessed
router.get('/', (req, res) => {
    res.render('index',{
       user: req.user
   });
});

// Executes when the register page is accessed
router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', (req, res) => {
    res.render('profile');
})

router.get('/logout', (req,res) => {
    res.redirect('/');
})

module.exports = router;
