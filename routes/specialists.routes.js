const express = require('express');

const specialistsController = require('./../controllers/specialistsController');
const router = express.Router();

router.get('/', specialistsController.getAllSpecialists);

module.exports = router;
