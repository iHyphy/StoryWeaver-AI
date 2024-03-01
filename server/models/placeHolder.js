/*const mongoose = require('mongoose'); // Import mongoose
const { Schema } = mongoose; // Import Schema from mongoose
const ReactionSchema = require('./reactionSchema'); // Import the reaction schema

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username :{
      type: String,
      required: true
    },
    // use ReplySchema to validate data for a reply
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

module.exports = mongoose.model('Thought', thoughtSchema); // Export the model
*/