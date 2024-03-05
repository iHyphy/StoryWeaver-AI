import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
};

export default Home;