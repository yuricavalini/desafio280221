const Area = require('../models/area');
const { update } = require('../models/person');
const Person = require('../models/person');
const Room = require('../models/Room');

module.exports = {
  /**
   * Search for multiple instances
   */
  async index(req, res, next) {
    try {
      const person = await Person.findAll();

      if (!person) {
        const error = new Error('Person could not be found.');
        error.statusCode = 404;
        throw error;
      }

      return res.status(200).json({
        message: 'Fetched Person Successfully!',
        person,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      return next(err);
    }
  },

  /**
   * Search for a single instance by its primary key.
   */
  async show(req, res, next) {
    try {
      const person = await Person.findByPk(req.params.id);

      if (!person) {
        const error = new Error('Person could not be found.');
        error.statusCode = 404;
        throw error;
      }

      return res.status(200).json({
        message: 'Fetched Person Successfully',
        person,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },

  /**
   * Builds a new model instance and calls save on it, including a room id and an area id.
   */
  async store(req, res, next) {
    const { name, lastName, roomName, areaName } = req.body;

    if (!name || !lastName || !roomName || !areaName) {
      return res.sendStatus(400);
    }

    const room = await Room.findOne({ where: { name: roomName } });

    const area = await Area.findOne({
      where: {
        name: areaName,
      },
    });

    try {
      const person = await Person.create({
        name,
        lastName,
        roomName,
        areaName,
        roomId: room.id,
        areaId: area.id,
      });

      req.io.emit('newPerson', person);

      console.log(person);

      return res
        .status(200)
        .json({ message: 'New Person Created Successfully!', person });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },

  /**
   * Updates instance and calls save on it.
   */
  async updateRoom(req, res, next) {
    const { roomName } = req.body;

    if (!roomName) {
      return res.sendStatus(400);
    }

    try {
      const updatedPersonByRoom = await Person.findByPk(req.params.id);

      if (!updatedPersonByRoom) {
        const error = new Error('Person could not be found.');
        error.statusCode = 404;
        throw error;
      }

      const newRoom = await Room.findOne({ where: { name: roomName } });

      if (!newRoom) {
        const error = new Error('Room could not be found.');
        error.statusCode = 404;
        throw error;
      }

      updatedPersonByRoom.roomName = newRoom.name;
      updatedPersonByRoom.roomId = newRoom.id;

      await updatedPersonByRoom.save();

      req.io.emit('updatedPersonRoom', updatedPersonByRoom);

      return res.status(200).json({
        message: 'Person Room Updated Successfully!',
        person: updatedPersonByRoom,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },

  /**
   * Updates instance and calls save on it.
   */
  async updateArea(req, res, next) {
    const { areaName } = req.body;

    if (!areaName) {
      return res.sendStatus(400);
    }

    try {
      const updatedPersonByArea = await Person.findByPk(req.params.id);

      if (!updatedPersonByArea) {
        const error = new Error('Person could not be found.');
        error.statusCode = 404;
        throw error;
      }

      const newArea = await Area.findOne({ where: { name: areaName } });

      if (!newArea) {
        const error = new Error('Area could not be found.');
        error.statusCode = 404;
        throw error;
      }

      updatedPersonByArea.areaName = newArea.name;
      updatedPersonByArea.areaId = newArea.id;

      await updatedPersonByArea.save();

      req.io.emit('updatedPersonArea', updatedPersonByArea);

      return res.status(200).json({
        message: 'Person Area Updated Successfully!',
        person: updatedPersonByArea,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },
};
