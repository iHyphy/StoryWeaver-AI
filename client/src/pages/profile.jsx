import React, { useState } from 'react';

function Profile() {
  // Sample data for saved encounters, character sheets, and monsters
  const [encounters, setEncounters] = useState([
    { id: 1, name: 'Encounter 1' },
    { id: 2, name: 'Encounter 2' },
    { id: 3, name: 'Encounter 3' }
  ]);
  const [characterSheets, setCharacterSheets] = useState([
    { id: 1, name: 'Character Sheet 1' },
    { id: 2, name: 'Character Sheet 2' },
    { id: 3, name: 'Character Sheet 3' }
  ]);
  const [monsters, setMonsters] = useState([
    { id: 1, name: 'Monster 1' },
    { id: 2, name: 'Monster 2' },
    { id: 3, name: 'Monster 3' }
  ]);

  // State for user settings
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle editing a saved item
  const handleEdit = (type, index) => {
    switch (type) {
      case 'encounter':
        // Your logic for editing encounter
        break;
      case 'characterSheet':
        // Your logic for editing character sheet
        break;
      case 'monster':
        // Your logic for editing monster
        break;
      default:
        break;
    }
  };

  // Function to handle deleting a saved item
  const handleDelete = (type, index) => {
    switch (type) {
      case 'encounter':
        // Your logic for deleting encounter
        break;
      case 'characterSheet':
        // Your logic for deleting character sheet
        break;
      case 'monster':
        // Your logic for deleting monster
        break;
      default:
        break;
    }
  };

  // Function to update email
  const updateEmail = () => {
    // Call API or perform necessary logic to update email
    console.log('Email updated:', email);
  };

  // Function to update password
  const updatePassword = () => {
    // Call API or perform necessary logic to update password
    console.log('Password updated:', password);
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>

      {/* Change Email */}
      <div>
        <h3>Change Email</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter new email"
        />
        <button onClick={updateEmail}>Update Email</button>
      </div>

      {/* Change Password */}
      <div>
        <h3>Change Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
        />
        <button onClick={updatePassword}>Update Password</button>
      </div>

      {/* Saved Sections */}
      <div className="saved-section">
        <h3>Saved Encounters</h3>
        <ul>
          {encounters.map((encounter, index) => (
            <li key={encounter.id}>
              <input
                type="text"
                value={encounter.name}
                onChange={(e) => {
                  // Your logic for editing encounter name
                }}
              />
              <button onClick={() => handleEdit('encounter', index)}>Edit</button>
              <button onClick={() => handleDelete('encounter', index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Saved Character Sheets */}
      <div className="saved-section">
        <h3>Saved Character Sheets</h3>
        <ul>
          {characterSheets.map((characterSheet, index) => (
            <li key={characterSheet.id}>
              <input
                type="text"
                value={characterSheet.name}
                onChange={(e) => {
                  // Your logic for editing character sheet name
                }}
              />
              <button onClick={() => handleEdit('characterSheet', index)}>Edit</button>
              <button onClick={() => handleDelete('characterSheet', index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Saved Monsters */}
      <div className="saved-section">
        <h3>Saved Monsters</h3>
        <ul>
          {monsters.map((monster, index) => (
            <li key={monster.id}>
              <input
                type="text"
                value={monster.name}
                onChange={(e) => {
                  // Your logic for editing monster name
                }}
              />
              <button onClick={() => handleEdit('monster', index)}>Edit</button>
              <button onClick={() => handleDelete('monster', index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
