import React, { useState } from 'react';
import '../characterSheet.css'; // Import CSS for styling (optional)


function CharacterSheet() {
  // State for character attributes
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    class: '',
    level: 1,
    background: '',
    alignment: '',
    // Ability Scores
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    // Skills
    skills: {
      'Acrobatics': { ability: 'dexterity', proficiency: false },
      'Animal Handling': { ability: 'wisdom', proficiency: false },
      'Arcana': { ability: 'intelligence', proficiency: false },
      'Athletics': { ability: 'strength', proficiency: false },
      'Deception': { ability: 'charisma', proficiency: false },
      'History': { ability: 'intelligence', proficiency: false },
      'Insight': { ability: 'wisdom', proficiency: false },
      'Intimidation': { ability: 'charisma', proficiency: false },
      'Investigation': { ability: 'intelligence', proficiency: false },
      'Medicine': { ability: 'wisdom', proficiency: false },
      'Nature': { ability: 'intelligence', proficiency: false },
      'Perception': { ability: 'wisdom', proficiency: false },
      'Performance': { ability: 'charisma', proficiency: false },
      'Persuasion': { ability: 'charisma', proficiency: false },
      'Religion': { ability: 'intelligence', proficiency: false },
      'Sleight of Hand': { ability: 'dexterity', proficiency: false },
      'Stealth': { ability: 'dexterity', proficiency: false },
      'Survival': { ability: 'wisdom', proficiency: false },
    },
    // Equipment
    equipment: ['Backpack', 'Rations', 'Torch', 'Rope'],
    // Features
    features: ['Darkvision', 'Second Wind', 'Sneak Attack'],
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  // Function to toggle skill proficiency
  const toggleSkillProficiency = (skillName) => {
    setCharacter({
      ...character,
      skills: {
        ...character.skills,
        [skillName]: {
          ...character.skills[skillName],
          proficiency: !character.skills[skillName].proficiency,
        },
      },
    });
  };

  return (
    <div className="character-sheet">
      {/* Character Information */}
      <h2>Character Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={character.name}
          onChange={handleInputChange}
        />
      </label>
      {/* Add input fields for other character information (race, class, level, etc.) */}

      {/* Ability Scores */}
    {/* Ability Scores */}
<h2>Ability Scores</h2>
<div>
  <label>
    Strength:
    <input
      type="number"
      value={character.strength}
      onChange={(event) => handleAbilityScoreChange('strength', event.target.value)}
    />
  </label>
  <label>
    Constitution:
    <input
      type="number"
      value={character.constitution}
      onChange={(event) => handleAbilityScoreChange('constitution', event.target.value)}
    />
  </label>
  <label>
    Dexterity:
    <input
      type="number"
      value={character.dexterity}
      onChange={(event) => handleAbilityScoreChange('dexterity', event.target.value)}
    />
  </label>
  <label>
    Intelligence:
    <input
      type="number"
      value={character.intelligence}
      onChange={(event) => handleAbilityScoreChange('intelligence', event.target.value)}
    />
  </label>
  <label>
    Wisdom:
    <input
      type="number"
      value={character.wisdom}
      onChange={(event) => handleAbilityScoreChange('wisdom', event.target.value)}
    />
  </label>
  <label>
    Charisma:
    <input
      type="number"
      value={character.charisma}
      onChange={(event) => handleAbilityScoreChange('charisma', event.target.value)}
    />
  </label>
  {/* Add similar input fields for other ability scores */}
</div>


      {/* Skills */}
      <h2>Skills</h2>
      <ul>
        {Object.entries(character.skills).map(([skillName, { ability, proficiency }]) => (
          <li key={skillName}>
            <label>
              {skillName} ({ability})
              <input
                type="checkbox"
                checked={proficiency}
                onChange={() => toggleSkillProficiency(skillName)}
              />
              Proficient
            </label>
          </li>
        ))}
      </ul>

      {/* Equipment */}
      <h2>Equipment</h2>
      <ul>
        {character.equipment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Features */}
      <h2>Features</h2>
      <ul>
        {character.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterSheet;

