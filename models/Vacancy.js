const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  activity: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  description: { type: String },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = model('Vacancy', schema);
