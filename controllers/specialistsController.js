const Specialist = require('./../models/Specialist');

exports.getAllSpecialists = async (req, res) => {
  try {
    const specialists = await Specialist.find();
    res.json(specialists);
  } catch (error) {
    console.log(error);
  }
};
