const express = require('express');

const foreignersController = require('./../controllers/foreignersController');
const router = express.Router();

router.get('/', foreignersController.getAllForeigners);

module.exports = router;
