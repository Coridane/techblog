// This is declaring Express which is a web application framework for building APIs and serving web pages.
const express = require('express');

// This is declaring the path for Sequelize - Sequelize  is an ORM (Object Relational Mapper) for representing data as objects.
const sequelize = require('./config/connection');

// This is declaring Handlebars which is a templating engine and includes layouts (wrappers) and partials (snippets 
// (of code for plugging into the handlebars as needed).
const exphbs = require('express-handlebars');

// This is declaring the path for the helpers which
const helpers = require('./utils/helpers')

// This is declaring the path for the routes
const routes = require('./controllers')

const hbs = exphbs.create({    
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: helpers });

// This is declaring Express-Session which is a module that creates sessions
const session = require('express-session')

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// This is declaring the PATH module which is a node module for interacting with file and directory paths.
const path = require ('path')

const app = express();
const PORT = process.env.PORT || 3001;

// All of the app.use 

// This is telling the Express where to serve static files from: /public
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'supercalifragilisticexpialidocious!!',    
    cookie: {}, // Leaving this object empty to use the default values
    resave: false, // This will not save a sesssion back to the store - even if the session was not modified
    saveUninitialized: true, // This will save a session to be saved if nothing was added during the session
    store: new SequelizeStore({
        db: sequelize,
        checkExpirationInterval: 5 * 60 * 1000, // Expired sessions will be removed every 5 minutes this is in milliseconds)
        expiration: 24 * 60 * 60 * 1000 // 24 hours is the maximum age of a session (also in milliseconds)
    })
}));

// This is mounting the middleware in Express that  parses incoming requests with JSON data
app.use(express.json());

// This is mounting the middleware in Express that parses incoming requests with URL-encoded data
app.use(express.urlencoded( {extended : true } ));

app.use(routes);

// This is setting the handlebars configurations
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')

// This will synchronize all models. force: false means it will NOT recreate the table if it already exists
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Listening on ${PORT}'));
});