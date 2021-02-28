const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const env = require('./config/env');

const sequelize = require('./util/database');
const Person = require('./models/person');
const Room = require('./models/room');
const Area = require('./models/area');

const personRoutes = require('./routes/person');
const roomRoutes = require('./routes/room');
const areaRoutes = require('./routes/area');
const errorHandler = require('./errors/errorHandler');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());

app.use(personRoutes);
app.use(roomRoutes);
app.use(areaRoutes);
app.use(errorHandler);

Room.hasMany(Person);
Person.belongsTo(Room);
Area.hasMany(Person);
Person.belongsTo(Area);

(async () => {
  await sequelize.sync();
  server.listen(env.PORT, () => {
    console.log('🔥 Server started at http://localhost:8080 🔥');
  });
})();
