const Sequelize = require('sequelize/index');

const sequelize = require('../util/database');

const Area = sequelize.define('area', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  occupancy: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: { max: 10 },
  },
});

Area.beforeUpdate((area, options) => {
  if (area.occupancy >= 10) {
    throw new Error("Occupancy can't be higher than 10.");
  }
});

module.exports = Area;
