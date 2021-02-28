const express = require('express');

const areaController = require('../controllers/area');

const router = express.Router();

router.get('/areas', areaController.index);

router.get('/areas/:id', areaController.show);

router.post('/areas', areaController.store);

module.exports = router;
