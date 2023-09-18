require('dotenv').config();

// This is storing the database name, user name, and password in "sequelize"
// so that we can export that at the end. It's pulling theese values from a .env file.
//  JAWSDB is an add-on for providing a MySQL database to a Heroku application.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;