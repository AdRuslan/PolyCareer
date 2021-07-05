const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const userController = require('./../controllers/userController');

router.post(
  '/registration',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Некорректный пароль').isLength({ min: 6 }),
  ],
  userController.registerUser
);

router.post(
  '/login',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Некорректный пароль').exists(),
  ],
  userController.loginUser
);

module.exports = router;
