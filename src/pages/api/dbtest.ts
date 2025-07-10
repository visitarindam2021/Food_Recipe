import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const users = await client.db().collection("users").find({}).toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  }
}