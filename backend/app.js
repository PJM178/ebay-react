const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookierParser = require('cookie-parser');
require('express-async-errors');

// Controllers and utilities
const usersRouter = require('./controllers/users');
// const loginRouter = require('./controllers/login');
const listingsRouter = require('./controllers/listings');
// const registerRouter = require('./controllers/register');
const authRouter = require('./controllers/auth');

const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
// Controllers and utilities

// Async/await
const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);

    logger.info('Connected to MongoDB');
  } catch (error) {
    logger.error('Error connecting to MongoDB', error.message);
  }
};

connectDB();

// Promise chain
// mongoose.connect(config.MONGODB_URI)
//   .then(() => {
//     logger.info('Connected to MongoDB')
//   })
//   .catch((error) => {
//     logger.error('Error connecting to MongoDB', error.message)
//   })

// Pay attention to the order of use - e.g. unknownEndpoint before apis breaks the app
app.use(cookierParser());
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(express.static('build'));

// API endpoints
app.use('/api/users', usersRouter);
app.use('/api/listings', listingsRouter);

// API endpoint - user authentication
// app.use('/api/auth/login', loginRouter);
// app.use('/api/auth/register', registerRouter);
app.use('/api/auth/', authRouter);



app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;