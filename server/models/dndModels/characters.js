const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  characterClass: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  abilityScores: {
    type: [
      {
        name: String,
        score: Number
      }
    ],
    required: true,
    validate: {
      validator: function (scores) {
        // Ensure the array has 6 elements
        return scores.length === 6;
      },
      message: props => `${props.value} must have exactly 6 ability scores`
    },
    default: generateAbilityScores
  }
});

function generateAbilityScores() {
  // Generates an array of objects, each containing a name and score
  const abilityScores = [
    { name: 'Strength', score: rollAbilityScore() },
    { name: 'Dexterity', score: rollAbilityScore() },
    { name: 'Constitution', score: rollAbilityScore() },
    { name: 'Intelligence', score: rollAbilityScore() },
    { name: 'Wisdom', score: rollAbilityScore() },
    { name: 'Charisma', score: rollAbilityScore() }
  ];
  return abilityScores;
}

function rollAbilityScore() {
  // Roll 4d6 and drop the lowest die
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  const minRoll = Math.min(...rolls);
  const totalScore = rolls.reduce((sum, roll) => sum + roll, 0) - minRoll;
  return totalScore;
}

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;