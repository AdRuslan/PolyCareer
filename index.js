const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/auth.routes');
const vacancyRouter = require('./routes/vacancy.routes');
const specialistsRouter = require('./routes/specialists.routes');
const reviewsRouter = require('./routes/reviews.routes');
const partnersRouter = require('./routes/partners.routes');
const foreignersRouter = require('./routes/foreigners.routes');

const app = express();
app.use(express.json({ extended: true }));

//ROUTES
app.use('/api/auth', userRouter);
app.use('/api/vacancy', vacancyRouter);
app.use('/api/specialists', specialistsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/partners', partnersRouter);
app.use('/api/foreigners', foreignersRouter);

//секретные данные, по типу ссылки для подключения бд или ключа jsonwebtoken умышленно не спрятаны
const PORT = process.env.PORT || 5000;
const DB_CONNECTION_URI =
  'mongodb+srv://ruslan:t2tWA0OxpQM8FP2w@cluster0.4uhch.mongodb.net/career?retryWrites=true&w=majority';

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
