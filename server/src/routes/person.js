const express = require('express');

const personController = require('../controllers/person');

const router = express.Router();

router.get('/person', personController.index);

router.get('/person/:id', personController.show);

router.post('/person', personController.store);

router.patch('/person/:id/room', personController.updateRoom);

router.patch('/person/:id/area', personController.updateArea);

module.exports = router;
