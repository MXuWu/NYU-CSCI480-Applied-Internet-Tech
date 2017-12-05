const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

router.get('/', function (req, res) {
    res.render('login');
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    }), function (req, res) {
        res.redirect('/');
    }
);



module.exports = router;
