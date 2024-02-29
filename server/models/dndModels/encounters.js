const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String, // Assuming location is a string
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character', // Reference the Character model
    required: true
  }],
  monsters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster', // Reference the Monster model
    required: true
  }]
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;