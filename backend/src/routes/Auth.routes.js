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
    res.cookie('FaceBookToken', req.user.token, {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

router.get('/logout', logoutUser);

module.exports = router;
