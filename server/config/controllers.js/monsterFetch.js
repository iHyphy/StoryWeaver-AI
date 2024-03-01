function getMonsterData(monsterId) {
    // Parse the JSON data containing monster information
    const monstersData = JSON.parse(monstersDataJSON);
    // Find the monster with the specified ID
    const monster = monstersData[`ImprovedInitiative.Creatures.${monsterId}`];
    return monster;
}