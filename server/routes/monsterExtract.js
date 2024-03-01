// Assuming you have an Express app instance called 'app'
app.get('/monsters/:id', (req, res) => {
    const monsterId = req.params.id;
    // Logic to fetch the monster data based on the ID
    // Send the monster data as the response
    const monsterData = getMonsterData(monsterId); // Implement this function
    res.json(monsterData);
});