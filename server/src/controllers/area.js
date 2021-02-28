const Area = require('../models/area');
const Person = require('../models/person');

module.exports = {
  async index(req, res, next) {
    try {
      const areas = await Area.findAll();

      const totalAreas = await Area.count();

      if (!areas || !totalAreas) {
        const error = new Error('Areas could not be found.');
        error.statusCode = 404;
        throw error;
      }

      return res.status(200).json({
        message: 'Fetched Areas Successfully!',
        areas,
        totalAreas,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const area = await Area.findByPk(req.params.id);

      if (!area) {
        const error = new Error('Area could not be found.');
        error.statusCode = 404;
        throw error;
      }

      const areaPerson = await Person.findAll({
        where: {
          areaId: req.params.id,
        },
      });

      return res
        .status(200)
        .json({ message: 'Fetched Area Successfully', area, areaPerson });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },

  async store(req, res, next) {
    const { name, occupancy } = req.body;

    if (!name || !occupancy) {
      return res.sendStatus(400);
    }

    try {
      const area = await Area.create({ name, occupancy });

      return res
        .status(200)
        .json({ message: 'New Area Created Successfully!', area });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return next(err);
    }
  },
};
