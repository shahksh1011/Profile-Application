// Invoke 'strict' JavaScript mode
'use strict';
// Define the routes module' method
module.exports = function (app) {

    /* GET users listing. */
    app.get('/', function (req, res, next) {
        res.send('respond with a resource');
    });

    /* GET user profile. */
    app.get('/profile', function (req, res, next) {
        res.send(req.user);
    });

};
