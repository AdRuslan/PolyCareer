const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  vacancies: [{ type: Types.ObjectId, ref: 'Vacancy' }],
});

module.exports = model('User', schema);
