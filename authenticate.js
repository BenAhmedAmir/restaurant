var passport = require('passport');
var LocaStrategy= require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new LocaStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());