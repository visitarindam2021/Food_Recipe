import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import FavoriteRecipe from "@/lib/models/FavoriteRecipe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "DELETE") {
    const { id } = req.query;
    await FavoriteRecipe.deleteOne({ recipeId: id });
    return res.status(204).end();
  }

  res.setHeader("Allow", ["DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 