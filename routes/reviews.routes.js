const express = require('express');

const reviewsController = require('./../controllers/reviewsController');
const router = express.Router();

router.get('/', reviewsController.getAllRewiews);
router.post('/add', reviewsController.createReview);

module.exports = router;
