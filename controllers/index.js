const router = require('express').Router(); // This is a function for creating router objects
const webRoutes = require('./web'); // These are routes to pages that will be visited by the user
const apiRoutes = require('./api'); // These are routes to the api (for form input)

router.use('/', webRoutes);
router.use('/api', apiRoutes);

module.exports = router;