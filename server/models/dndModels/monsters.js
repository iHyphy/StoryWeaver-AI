const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  hitPoints: {
    type: Number,
    required: true
  },
  attack: {
    type: String,
    required: true
  },
  abilities: [String],
  resistances: [String],
  immunities: [String],
  actions: [{
    name: String,
    content: String,
    usage: String
  }]
});

const Monster = mongoose.model('Monster', monsterSchema);

module.exports = Monster;