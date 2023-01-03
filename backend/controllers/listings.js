const listingsRouter = require('express').Router();
const Listing = require('../models/listing');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    console.log(authorization.substring(7));
    return authorization.substring(7);
  }
  return null;
};

// get all listings from the database
listingsRouter.get('/', async (request, response) => {
  const listings = await Listing.find({}).populate('listedBy');
  
  response.json(listings);
});

// get a single listing
listingsRouter.get('/:id', async (req, res) => {
  const listing = await Listing.findById(req.params.id).populate('listedBy', { username: 1 });

  if (listing) {
    res.json(listing.toJSON());
  } else {
    res.status(404).end();
  }
});

listingsRouter.post('/', async (request, response) => {
  const body = request.body;
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({ error: 'Missing or invalid token.' });
  }

  const user = await User.findById(decodedToken.id);

  const listing = new Listing({
    title: body.title,
    category: body.category,
    description: body.description,
    price: body.price,
    listedBy: user._id
  });

  const savedListing = await listing.save();
  user.listings = user.listings.concat(savedListing._id);
  await user.save();

  await savedListing.populate('listedBy', { username: 1 });

  response.json(savedListing);
});

module.exports = listingsRouter;