const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const schema = new Schema({
  specialization: { type: String },
});

module.exports = model('Specialist', schema);
