import User from './../models/User.js';

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUsed = await User.findOne({ email: email });

    if (isUsed) {
      return res
        .status(300)
        .json({ message: 'Данный Email уже занят, попробуйте другой' });
    }

    const user = new User({ email, password });

    await user.save();

    res.status(201).json({
      message: 'Пользователь создан',
    });
  } catch (err) {
    console.log(err);
  }
};
