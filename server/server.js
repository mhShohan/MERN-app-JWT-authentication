//dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');

const { errorHandler } = require('./middleweres/errorMiddlewere');

//init express app
const app = express();
dotenv.config();

//middleweres
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/goals', require('./routes/goalRoute'));
app.use('/api/users', require('./routes/userRoute'));

// default error handler
app.use(errorHandler);

// environment variable
const PORT = process.env.PORT || 5000;

// server listing
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`.black.bgGreen));
});
