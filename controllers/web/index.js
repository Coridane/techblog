const router = require('express').Router(); // This .Router function will create the router objects
const login = require('/login.js'); // This is the route to the login page
const dashboard = require('./dashboard.js'); // This is the route to the dashboard (user's posts)
const homepage = require('/home.js'); // This is the route to the homepage (all posts)

router.use('/login', login)
router.use('/dashboard', dashboard)
router.use('/', homepage);

module.exports = router;