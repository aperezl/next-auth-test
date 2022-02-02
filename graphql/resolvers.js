import jwt from "jsonwebtoken";

console.log({ s: process.env.SECRET });
export const resolvers = {
  Query: {
    getUser: async (_, __, ctx) => {

      console.log({ xxx: ctx.user })
      if (!ctx.user) {
        console.log('return null!!!!!!')
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
        return null
      }
      const user = await ctx.db.user.findFirst();
      console.log({ user });
      return user;
    },
    // Mutation: {},
  },
};
