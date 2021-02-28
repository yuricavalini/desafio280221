const express = require('express');

const roomController = require('../controllers/room');

const router = express.Router();

router.get('/rooms', roomController.index);

router.get('/rooms/:id', roomController.show);

router.post('/rooms', roomController.store);

module.exports = router;
