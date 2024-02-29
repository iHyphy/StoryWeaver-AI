
/*
const User = require('./models/user');
const Thought = require('./models/thoughts');
const User = require('./models/user');
const Thought = require('./models/thoughts');
*/   // for model functionality!!

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require('./config/connection');
const typeDefs = require('./graphql/schemas/typeDefs'); 
const resolvers = require('./graphql/schemas/resolvers'); 

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and mount character routes
const characterRoutes = require('./routes/characterRoutes.js');
app.use('/api/characters', characterRoutes);

// Import and mount monster routes
const monsterRoutes = require('./routes/monsterRoutes.js');
app.use('/api/monsters', monsterRoutes);

// Import and mount encounter routes
const encounterRoutes = require('./routes/encounterRoutes.js');
app.use('/api/encounters', encounterRoutes);



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start(); 

 
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