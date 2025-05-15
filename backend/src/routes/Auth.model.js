const express = require('express');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { logoutUser } = require('../controllers/auth.controller');
const router = express.Router();

router.get('/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.cookie('FacebookToken', req.user.token, {
      httpOnly: true,
      secure: false, 
      maxAge: 24 * 60 * 60 * 1000, 
    });

    res.redirect('http://localhost:5173/dashboard');
  }
);

router.get('/logout', logoutUser )
module.exports = router;