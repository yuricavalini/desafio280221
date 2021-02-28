const { Error } = require('sequelize/index');

module.exports = (err, req, res, next) => {
  const { message, data } = err;

  let status;

  if (err instanceof Error) {
    status = 'Database failed';
  }

  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({ message, data, status, statusCode });
};
