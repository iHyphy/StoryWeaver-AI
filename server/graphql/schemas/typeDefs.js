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

  type Query {
    characters: [Character]
    monsters: [Monster]
    encounters: [Encounter]
  }

  type Mutation {
    createCharacter(name: String!, class: String!, level: Int!, race: String!): Character
    createMonster(name: String!, challengeRating: Float!, type: String!): Monster
    createEncounter(name: String!, monsters: [ID]!, characters: [ID]!): Encounter
  }
`;

module.exports = typeDefs;