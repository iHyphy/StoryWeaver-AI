const createCharacterButton = document.getElementById('submitButton');

createCharacterButton.addEventListener('click', async () => {
  try {
    // Gather user responses from the form
    const characterName = document.getElementById('characterName').value;
    const characterClass = document.getElementById('characterClass').value;
    const race = document.getElementById('characterRace').value;
    const background = document.getElementById('characterBackground').value;
    const alignment = document.getElementById('characterAlignment').value;
    // Gather other attributes for character development
    const personality = document.getElementById('characterPersonality').value;
    const backstory = document.getElementById('characterBackstory').value;
    // Gather attributes for encounters
    const enemyType = document.getElementById('enemyType').value;
    const location = document.getElementById('location').value;
    // Gather other attributes as needed

    // Create an object with user responses
    const characterData = { 
      characterName, 
      characterClass, 
      race, 
      background, 
      alignment,
      personality,
      backstory,
      enemyType,
      location
      /*, other attributes */ 
    };

    // Send user responses in the POST request to OpenAI
    const response = await axios.post('/api/generate-character-sheet', characterData);

    // Handle the response from OpenAI and display the character sheet
    console.log('Character Sheet:', response.data);
    // Display the character sheet in a container
    const container4 = document.getElementById('container4');
    container4.innerHTML = response.data + `<button type="button" class="btn btn-secondary" onclick="showContainer('container4', 'container3')">Back</button>`;

  } catch (error) {
    // Handle errors
    console.error('Error:', error);
  }
});