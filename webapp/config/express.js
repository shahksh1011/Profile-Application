// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	passport = require('passport');

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	var app = express();

	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Configure the Passport middleware
	app.use(passport.initialize());

	app.get('/', (req, res) => res.send('Hello World!'));

	const userAuth = require('../app/routes/users.server.routes.js');
	const profileRoute = require('../app/routes/profile.server.routes.js');
	// Load the routing files
	app.use('/auth', userAuth);
	app.use('/user', passport.authenticate('jwt', {session: false}), profileRoute);

	// Return the Express application instance
	return app;
};