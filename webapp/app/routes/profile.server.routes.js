// Invoke 'strict' JavaScript mode
'use strict';
var express = require('express'),
    router = express.Router();
// Define the routes module' method

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', function (req, res, next) {
    res.send(req.user);
});

module.exports = router;

