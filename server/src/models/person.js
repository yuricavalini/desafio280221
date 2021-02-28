const Sequelize = require('sequelize/index');

const sequelize = require('../util/database');

const Person = sequelize.define('person', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: { type: Sequelize.STRING, allowNull: false },
  roomName: { type: Sequelize.STRING, defaultValue: '' },
  areaName: { type: Sequelize.STRING, defaultValue: '' },
});

module.exports = Person;
