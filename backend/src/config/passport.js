const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

passport.use(new FacebookStrategy(
  {
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    profileFields: ['id', 'displayName', 'emails', 'picture.type(large)'],
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = {
        facebookId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0]?.value || 'No public email',
        image: profile.photos?.[0]?.value || null,
        token: accessToken,
      };
      return done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
