const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
  name: { type: String },
  feedback: { type: String },
  grade: { type: Number },
});

module.exports = model('Review', schema);
