import jwt from "jsonwebtoken";

console.log({ s: process.env.SECRET });
export const resolvers = {
  Query: {
    getUser: async (_, { token }, ctx) => {
      return await jwt.verify(
        token,
        process.env.SECRET || "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw"
      );

    },
    // Mutation: {},
  },
};
