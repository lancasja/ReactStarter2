var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');
var SpotifyStrategy = require('passport-spotify').Strategy;

var client_id = '3317aaef5f834d229aeaba056f8c8ea4';
var client_secret = '86a19ccc1fc94575bee3cd06ba8bc5aa';

// Setup passport session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new SpotifyStrategy({
  clientID: client_id,
  clientSecret: client_secret,
  callbackURL: 'http://localhost:3001/callback'
}, function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    return done(null, profile);
  });
}));

var app = express();

app.use(cookieParser());
app.use(bodyParser());
app.use(methodOverride());
app.use(session({ secret: 'some random thing'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/spotify',
  passport.authenticate('spotify', {
    scope: [
      'user-read-email',
      'user-read-private'
    ],
    showDialog: true
  }),
  function(req, res) {
    // Request will be redirected, this will not be called
  }
);

app.get('/callback',
  passport.authenticate('spotify',  {
    failureRedirect: 'http://localhost:8000/#/auth/login'
  }),
  function(req, res, next) {
    ensureAuthenticated(req, res, next);
    res.redirect('http://localhost:8000/#/home');
  }
);

app.listen(3001);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.cookie('authenticated', true);
    return next();
  }
  res.redirect('/login');
}