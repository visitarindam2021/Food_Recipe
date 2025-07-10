import mongoose, { Schema } from "mongoose";

const FavoriteRecipeSchema = new Schema({
  recipeId: { type: String, required: true, unique: true },
  recipeName: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.FavoriteRecipe ||
  mongoose.model("FavoriteRecipe", FavoriteRecipeSchema); 