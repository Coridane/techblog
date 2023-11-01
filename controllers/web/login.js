const router = require('express').Router(); // This .Router function will create the router objects
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    res.render('login'); // This will render the login handlebars
});

module.exports = router;