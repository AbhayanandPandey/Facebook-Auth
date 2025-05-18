const express = require('express');
const passport = require('passport');
const { logoutUser } = require('../controllers/Auth.controller');

const router = express.Router();

router.get('/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);
router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    const { name, email, image, token } = req.user;

    res.cookie('FaceBookToken', token, {
      httpOnly: false,
      secure: false, 
      maxAge: 24 * 60 * 60 * 1000,
    });

    const redirectURL = `${process.env.CLIENT_URL}/dashboard?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&image=${encodeURIComponent(image)}`;

    res.redirect(redirectURL);
  }
);


router.get('/logout', logoutUser);

module.exports = router;
