const Room = require('../models/room');
const Person = require('../models/person');

module.exports = {
  /**
   * Search for multiple instances.
   */
  async index(req, res, next) {
    try {
      const rooms = await Room.findAll();

      if (!rooms) {
        const error = new Error('Rooms could not be found.');
        error.statusCode = 404;
        throw error;
      }

      return res.status(200).json({
        message: 'Fetched Rooms Successfully!',
        rooms,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      return next(err);
    }
  },

  /**
   * Search for a single instance by its primary key. Also, search for all People that are registered by an specific Room ID.
   */
  async show(req, res, next) {
    try {
      const room = await Room.findByPk(req.params.id);

      if (!room) {
        const error = new Error('Room could not be found.');
        error.statusCode = 404;
        throw error;
      }

      const roomPerson = await Person.findAll({
        where: {
          roomId: req.params.id,
        },
      });

      return res
        .status(200)
        .json({ message: 'Fetched Room Successfully', room, roomPerson });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },

  /**
   * Builds a new model instance and calls save on it.
   */
  async store(req, res, next) {
    const { name, occupancy } = req.body;

    if (!name || !occupancy) {
      return res.sendStatus(400);
    }

    try {
      const room = await Room.create({ name, occupancy });

      return res
        .status(200)
        .json({ message: 'New Room Created Successfully!', room });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },
};
