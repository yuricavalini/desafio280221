require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE: process.env.POSTGRESQL || 'desafio',
  DB_USERNAME: process.env.DB_USERNAME || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'admin',
};
