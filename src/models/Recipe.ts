import mongoose, { Schema, models } from "mongoose";

const RecipeSchema = new Schema({
  idMeal: { type: String, required: true, unique: true },
  name: String,
  category: String,
  area: String,
  instructions: String,
  thumbnail: String,
  ingredients: [String],
});

const Recipe = models.Recipe || mongoose.model("Recipe", RecipeSchema);
export default Recipe; 