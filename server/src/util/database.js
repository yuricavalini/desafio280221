const Sequelize = require('sequelize/index');
const env = require('../config/env');

const sequelize = new Sequelize(
  env.DATABASE,
  env.DB_USERNAME,
  env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: 'localhost',
    define: {
      freezeTableName: true,
    },
  }
);

module.exports = sequelize;
