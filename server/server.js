const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const db = require('./config/connection.js');
const typeDefs = require('./graphql/schemas/typeDefs.js');
const resolvers = require('./graphql/schemas/resolvers.js');
const { authMiddleware } = require('./utils/authMiddleware.js');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: ['http://localhost:5173', 'https://studio.apollographql.com'],
    credentials: true,
  },
  context: authMiddleware,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

app.use('/graphql', expressMiddleware(server, {
  context: authMiddleware
}));

app.get('/', (req, res) => {
    res.send('Welcome to the API server!');
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
// added db.once possible perm 

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});
};

// Call the async function to start the server
startApolloServer();

