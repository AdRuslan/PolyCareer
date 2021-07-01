import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  vacancy: [{ type: Types.ObjectId, ref: 'Vacancy' }],
});

export default model('User', schema);
