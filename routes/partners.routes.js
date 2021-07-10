const express = require('express');

const partnersController = require('./../controllers/partnersController');
const router = express.Router();

router.get('/', partnersController.getAllPartners);

module.exports = router;
