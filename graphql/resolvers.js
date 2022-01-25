import jwt from "jsonwebtoken";

const createToken = (user, secret, expiresIn) => {
  const { id, name, email } = user;
  return jwt.sign({ id, name, email }, secret, { expiresIn });
};

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
