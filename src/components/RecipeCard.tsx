import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/types";
import FavoriteButton from "@/components/FavoriteButton";
import { useEffect, useState } from "react";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    fetch("/api/favorites")
      .then(res => res.json())
      .then(favs => setFavorited(favs.some((f: any) => f.recipeId === recipe.idMeal)));
  }, [recipe.idMeal]);

  return (
    <Link
      href={`/recipes/${recipe.idMeal}`}
      className="bg-gradient-to-br from-white via-indigo-50 to-pink-100 rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col border border-indigo-100 hover:border-pink-200 group"
    >
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={320}
        height={160}
        className="rounded mb-2 h-40 object-cover group-hover:scale-105 transition mx-auto"
      />
      <div className="font-bold text-lg text-pink-600 group-hover:text-pink-700 text-center mt-2">{recipe.strMeal}</div>
      <div className="text-sm text-gray-600 line-clamp-2 mt-2 text-center bg-gray-100 rounded-full px-4 py-2 mx-auto w-full max-w-xs shadow-sm">
        {recipe.strInstructions?.slice(0, 80) || "No description..."}
      </div>
      <div className="flex justify-center mt-2">
        <FavoriteButton
          recipeId={recipe.idMeal}
          recipeName={recipe.strMeal}
          imageUrl={recipe.strMealThumb}
          isFavorited={favorited}
          onChange={setFavorited}
        />
      </div>
    </Link>
  );
};
export default RecipeCard; 