const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_PATH,
});

sequelize.sync().then(() => console.log("Database synced"));

module.exports = sequelize;
