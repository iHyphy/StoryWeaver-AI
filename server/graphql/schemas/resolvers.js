const { Character, Monster, Encounter } = require('../../models');

const resolvers = {
  Query: {
    characters: async () => {
      return Character.find({});
    },
    monsters: async () => {
      return Monster.find({});
    },
    encounters: async () => {
      return Encounter.find({});
    },
  },
  Mutation: {
    createCharacter: async (parent, args) => {
      const character = await Character.create(args);
      return character;
    },
    createMonster: async (parent, args) => {
      const monster = await Monster.create(args);
      return monster;
    },
    createEncounter: async (parent, args) => {
      const encounter = await Encounter.create(args);
      return encounter;
    },
  },
};

module.exports = resolvers;