const bcrypt = require('bcrypt');
const registerRouter = require('express').Router();
const User = require('../models/user');

registerRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

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
    passwordHash
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});


module.exports = registerRouter;