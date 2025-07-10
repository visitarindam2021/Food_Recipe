"use client";
import { useEffect, useState } from "react";
import RecipeCard from "@/components/RecipeCard";

type Favorite = {
  _id: string;
  recipeId: string;
  recipeName: string;
  imageUrl: string;
};

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = () => {
    fetch("/api/favorites")
      .then(res => res.json())
      .then(data => {
        setFavorites(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Map favorites to Recipe type for RecipeCard
  const recipes = favorites.map(fav => ({
    idMeal: fav.recipeId,
    strMeal: fav.recipeName,
    strMealThumb: fav.imageUrl,
    strInstructions: '', // No instructions in favorite, can be empty
  }));

  return (
    <div className="mx-6 flex flex-col gap-6">
      <div className="flex gap-2">
        <span className="font-semibold text-orange-500 text-base">Favorite Meals</span>
      </div>
      {recipes.length === 0 ? (
        <div>No favorite recipes yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
} 