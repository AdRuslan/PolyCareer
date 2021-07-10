const Partner = require('./../models/Partner');

exports.getAllPartners = async (req, res) => {
  try {
    const reviews = await Partner.find();
    res.json(reviews);
  } catch (error) {
    console.log(error);
  }
};
