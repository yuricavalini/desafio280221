const Sequelize = require('sequelize/index');

const sequelize = require('../util/database');

const Room = sequelize.define('room', {
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

Room.beforeUpdate((room, options) => {
  if (room.occupancy >= 10) {
    throw new Error("Occupancy can't be higher than 10.");
  }
});

module.exports = Room;
