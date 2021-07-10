const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
  partner: { type: String },
});

module.exports = model('Partner', schema, 'partner');
