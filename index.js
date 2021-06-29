import express from 'express';
import mongoose from 'mongoose';

const app = express();

const PORT = process.env.PORT || 5000;
const DB_CONNECTION_URI =
  'mongodb+srv://ruslan:t2tWA0OxpQM8FP2w@cluster0.4uhch.mongodb.net/career?retryWrites=true&w=majority';

//t2tWA0OxpQM8FP2w
async function start() {
  try {
    await mongoose.connect(DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
