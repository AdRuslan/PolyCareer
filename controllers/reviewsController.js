const Review = require('./../models/Review');

exports.getAllRewiews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.log(error);
  }
};

exports.createReview = async (req, res) => {
  try {
    const { name, feedback, grade } = req.body;

    const vacancy = await new Review({
      name,
      feedback,
      grade,
    });

    await vacancy.save();

    res.json(vacancy);
  } catch (error) {
    console.log(error);
  }
};
