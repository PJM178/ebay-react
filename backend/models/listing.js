const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ['electronics', 'apparel', 'other'],
      message: '{VALUE} is not a valid category.'
    }
  },
  image: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  deletedAt: {
    type: Date
  },
  listedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

listingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing