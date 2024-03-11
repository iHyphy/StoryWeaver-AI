/*
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Character {
    _id: ID!
    name: String!
    class: String!
    level: Int!
    race: String!
  }

  type Monster {
    _id: ID!
    name: String!
    challengeRating: Float!
    type: String!
  }

  type Encounter {
    _id: ID!
    name: String!
    monsters: [Monster]!
    characters: [Character]!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    characters: [Character]
    monsters: [Monster]
    encounters: [Encounter]
    users: [User] # Add this line
  }

  type Mutation {
    createCharacter(name: String!, class: String!, level: Int!, race: String!): Character
    createMonster(name: String!, challengeRating: Float!, type: String!): Monster
    createEncounter(name: String!, monsters: [ID]!, characters: [ID]!): Encounter
    signup(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;

module.exports = typeDefs;
*/

const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
