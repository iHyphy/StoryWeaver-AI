/*const API_URL = 'http://localhost:3001/api'; // Assuming your server is running on port 3001 and has an '/api' endpoint

const createEntity = async (endpoint, data, entityName) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Failed to create ${entityName}`);
    }

    console.log(`${entityName} created successfully`);
  } catch (error) {
    console.error(`Error creating ${entityName}:`, error);
  }
};

export const createCharacter = async (data) => {
  await createEntity('createCharacter', data, 'character');
};

export const createEncounter = async (data) => {
  await createEntity('createEncounter', data, 'encounter');
};

export const createMonster = async (data) => {
  await createEntity('createMonster', data, 'monster');
};
*/