import mongoose, { Schema, models } from "mongoose";

const FavoriteSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  recipeId: { type: String, required: true },
});

const Favorite = models.Favorite || mongoose.model("Favorite", FavoriteSchema);
export default Favorite; 