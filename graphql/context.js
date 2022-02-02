import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";


const getToken = async (req, res) => {
  const token = req.headers["authorization"];
  if (token) {
    return token.replace("Bearer ", "").trim()
  }
  try {
    const session = await getServerSession({ req, res }, authOptions)
    return session.token
  } catch (e) {
    console.log('Error try get  session')
    return null
  }

}

export async function createContext({ req, res }) {
  let user;
  const token = await getToken(req, res)
  if (token) {
    console.log({ token })
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
