const Character = require('../models/dndModels/characters');

// Create a new Character document
const newCharacter = new Character({
  name: 'Your Character Name',
  characterClass: 'Your Character Class',
  level: 1,
  race: 'Your Character Race'
});

// At this point, abilityScores will be automatically generated according to the generateAbilityScores function defined in your schema

// Save the new character to the database
newCharacter.save()
  .then(savedCharacter => {
    console.log('Character saved successfully:', savedCharacter);
  })
  .catch(error => {
    console.error('Error saving character:', error);
  });