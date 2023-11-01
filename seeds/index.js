const userSeed = require('./users.js');
const postSeed = require('./posts.js');
const commentSeed = require('./comments.js');
const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync( { force: true });
    console.log('TABLES HAVE BEEN RE-CREATED')
    
    await userSeed();
    console.log('USERS HAVE BEEN SEEDED')

    await postSeed();
    console.log('POSTS HAVE BEEN SEEDED')

    await commentSeed();
    console.log('COMMENTS HAVE BEEN SEEDED')

    process.exit(0); // Terminate the process with an exist status of 0 (success)

};

seed();