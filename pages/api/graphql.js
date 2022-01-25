import { ApolloServer, gql } from "apollo-server-micro";
import { resolvers } from "../../graphql/resolvers";
import { readFileSync } from "fs";
import { createContext } from "../../graphql/context";
import { join } from "path";

import Cors from "micro-cors";
const cors = Cors();

const loadTypeDef = (schema) =>
  gql(
    readFileSync(join(process.cwd(), "graphql/schema", `${schema}.gql`), "utf8")
  );

const apolloServer = new ApolloServer({
  typeDefs: [loadTypeDef("User")],
  resolvers,
  context: createContext,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
