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
      'Athletics': { ability: 'strength', proficiency: false },
      // Add more skills as needed
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
      <h2>Ability Scores</h2>
      <div>
        {/* Display ability scores and buttons to modify them */}
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
