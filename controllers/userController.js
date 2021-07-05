const User = require('./../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'supermegasecretnayastroka';

exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации',
      });
    }

    const { email, password } = req.body;

    const isUsed = await User.findOne({ email: email });

    if (isUsed) {
      return res
        .status(300)
        .json({ message: 'Данный Email уже занят, попробуйте другой' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ email, password: hashedPassword });

    await user.save();

    res.status(201).json({
      message: 'Пользователь создан',
    });
  } catch (err) {
    console.log(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации',
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }); 

    if (!user) {
      return res.status(400).json({
        message: 'Такого пользователя нет в базе данных',
      });
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Пароли не совпадают',
      });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      token,
      userId: user.id,
    });
  } catch (err) {
    console.log(err);
  }
};
