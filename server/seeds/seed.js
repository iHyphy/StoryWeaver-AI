const mongoose = require('../config/connection');
const User = require('../models/user'); // Adjust the path if necessary

mongoose.connection.once('open', async () => {
  try {
    // Clear existing users
    await User.deleteMany({});

    // Generate sample user data
    const userData = generateUserData(); // Implement this function to generate user data

    // Insert sample user data
    await User.insertMany(userData);

    console.log('Users seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
});

// Function to generate sample user data
function generateUserData() {
  const userData = [];
  for (let i = 0; i < 10; i++) { // Generate 10 sample users
    userData.push({
      username: `user${i}`,
      email: `user${i}@example.com`,
      password: 'password123', // You can hash passwords here if needed
      // Add other user fields as needed
    });
  }
  return userData;
}
