const Vacancy = require('./../models/Vacancy');

exports.addVacancy = async (req, res) => {
  try {
    const {
      name,
      activity,
      position,
      salary,
      description,
      telephone,
      email,
      userId,
    } = req.body;

    const vacancy = await new Vacancy({
      owner: userId,
      name,
      activity,
      position,
      salary,
      description,
      telephone,
      email,
    });

    await vacancy.save();

    res.json(vacancy);
  } catch (error) {
    console.log(error);
  }
};

exports.getOwnVacancy = async (req, res) => {
  try {
    const { userId } = req.query;

    const vacancy = await Vacancy.find({ owner: userId });

    res.json(vacancy);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteVacancy = async (req, res) => {
  try {
    const vacancy = await Vacancy.findOneAndDelete({ _id: req.params.id });
    res.json(vacancy);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    res.json(vacancies);
  } catch (error) {
    console.log(error);
  }
};

exports.getVacanciesStats = async (req, res) => {
  try {
    const stats = await Vacancy.aggregate([
      {
        $match: { salary: { $gte: 0 } },
      },
      {
        $group: {
          _id: null,
          numVacancies: { $sum: 1 },
          avgSalary: { $avg: '$salary' },
          minSalary: { $min: '$salary' },
          maxSalary: { $max: '$salary' },
        },
      },
    ]);

    res.json({
      stats,
    });
  } catch (error) {
    console.log(error);
  }
};
