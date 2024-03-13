const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    # Add any other fields related to the User type
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    # Add any other queries you have
    getOpenAIApiKey: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # Define the new ProcessMessageToChatGPT mutation
    setOpenAIApiKey(apiKey: String!): String
  }
`;

module.exports = typeDefs;
