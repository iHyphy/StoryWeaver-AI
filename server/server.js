const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require('./config/connection.js');
const cors = require('cors');
const typeDefs = require('./graphql/schemas/typeDefs.js');
const resolvers = require('./graphql/schemas/resolvers.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const characterRoutes = require('./routes/characterRoutes.js');
const monsterRoutes = require('./routes/monsterRoutes.js');
const encounterRoutes = require('./routes/encounterRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const loginRoutes = require('./routes/loginRoutes.js'); // Import loginRoutes

app.use('/api/characters', characterRoutes);
app.use('/api/monsters', monsterRoutes);
app.use('/api/encounters', encounterRoutes);
app.use('/api/users', userRoutes);
app.use('/api/login', loginRoutes); // Mount loginRoutes at /api/login

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();

  app.use('/api/users', authMiddleware);
  server.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('Welcome to the API server!');
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
}

startServer();
