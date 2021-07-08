const express = require('express');

const vacancyController = require('./../controllers/vacancyController');
const router = express.Router();

router.post('/add', vacancyController.addVacancy);
router.get('/', vacancyController.getOwnVacancy);
router.get('/all', vacancyController.getAllVacancies);
router.get('/vacancies-stats', vacancyController.getVacanciesStats);
router.delete('/delete/:id', vacancyController.deleteVacancy);

module.exports = router;
