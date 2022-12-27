const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authRouter = require('express').Router();
const User = require('../models/user');

// register user
authRouter.post('/register', async (request, response) => {
  const { username, name, password } = request.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: 'Username must be unique.'
    });
  }

  if (password.length < 3) {
    return response.status(400).json({
      error: 'Password is shorter than the minimum allowed length (5)'
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

// login user
authRouter.post('/login', async (request, response) => {
  const { username, password } = request.body;
  const user = await User.findOne({ username });
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'Invalid credentials.'
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id
  };

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60*60 });

  response
    .cookie('access_token', token, {
      httpOnly: true
    })
    .cookie('logged_in', true, {
      httpOnly: false
    })
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

module.exports = authRouter;