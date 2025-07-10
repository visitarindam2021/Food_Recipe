import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import FavoriteRecipe from "@/lib/models/FavoriteRecipe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "GET") {
    const favorites = await FavoriteRecipe.find({});
    return res.status(200).json(favorites);
  }

  if (req.method === "POST") {
    const { recipeId, recipeName, imageUrl } = req.body;
    if (!recipeId || !recipeName || !imageUrl) {
      return res.status(400).json({ error: "Missing fields" });
    }
    try {
      const fav = await FavoriteRecipe.create({ recipeId, recipeName, imageUrl });
      return res.status(201).json(fav);
    } catch (e) {
      return res.status(409).json({ error: "Already favorited" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 