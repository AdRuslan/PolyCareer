const Foreigner = require('./../models/Foreigner');

exports.getAllForeigners = async (req, res) => {
  try {
    const reviews = await Foreigner.find();
    res.json(reviews);
  } catch (error) {
    console.log(error);
  }
};
