// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var passport = require('passport'),
	mongoose = require('mongoose'),
	passportJWT = require("passport-jwt"),
	JWTStrategy = passportJWT.Strategy,
	ExtractJWT = passportJWT.ExtractJwt;

// Define the Passport configuration method
module.exports = function () {
	// Load the 'User' model
	var User = mongoose.model('User');

	// Use Passport's 'serializeUser' method to serialize the user id
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	// Use Passport's 'deserializeUser' method to load the user document
	passport.deserializeUser(function (id, done) {
		User.findOne({
			_id: id
		}, '-password -salt', function (err, user) {
			done(err, user);
		});
	});

	passport.use(new JWTStrategy({
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
		secretOrKey: 'secret'
	},
		function (jwtPayload, cb) {

			//find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
			return UserModel.findOneById(jwtPayload.id)
				.then(user => {
					return cb(null, user);
				})
				.catch(err => {
					return cb(err);
				});
		}
	));

	// Load Passport's strategies configuration files
	require('./strategies/local.js')();
};