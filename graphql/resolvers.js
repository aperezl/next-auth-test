import jwt from "jsonwebtoken";

console.log({ s: process.env.SECRET });
export const resolvers = {
  Query: {
    getUser: async (_, { token }, ctx) => {
      // return await jwt.verify(
      //   token,
      //   process.env.SECRET || "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw"
      // );
      const user = await ctx.db.user.findFirst();
      console.log({ user });
      return user;
    },
    // Mutation: {},
  },
};
