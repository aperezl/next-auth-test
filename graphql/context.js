import { PrismaClient } from ".prisma/client";
import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";

export async function createContext({ req }) {
  let user;
  const token = req.headers["authorization"];
  if (token) {
    try {
      user = jwt.verify(
        token.replace("Bearer ", ""),
        process.env.SECRET ?? "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw"
      );
    } catch (e) {
      console.log("error", e);
    }
  }

  return {
    db: prisma,
    user,
  };
}
