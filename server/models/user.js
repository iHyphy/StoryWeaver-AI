const mongoose = require('mongoose');
const { Schema } = mongoose; // Import Schema from Mongoose

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Enter a valid email"
      ]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
  },
  {
      toJSON: {
          virtuals: true
      },
      id: false
  }
);

module.exports = mongoose.model('User', userSchema); // Export the model