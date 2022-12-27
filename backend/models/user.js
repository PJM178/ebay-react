const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3
  },
  userInfo: {
    name: {
      first: {
        type: String
      },
      last: {
        type: String
      }
    },
    address: {
      country: {
        type: String
      },
      city: {
        type: String
      },
      postNumber: {
        type: Number
      },
      street: {
        type: String
      }
    },
    email: {
      type: String,
      unique: true
    },
    phoneNumber: {
      type: Number,
      unique: true
    }
  },
  passwordHash: {
    type: String,
    required: true
  },
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listing'
    }
  ]
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // do not reveal the password even though it's hashed
    delete returnedObject.passwordHash;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;