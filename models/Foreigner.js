const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
  question: { type: String },
  answer: { type: String },
});

module.exports = model('Foreigner', schema);
