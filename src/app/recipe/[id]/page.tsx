"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";

export default function RecipeDetail() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const router = useRouter();
  const [recipe, setRecipe] = useState<any>(null);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data.meals?.[0] || null));
    fetch("/api/favorites")
      .then(res => res.json())
      .then(favs => setFavorited(favs.some((f: any) => f.recipeId === id)));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push(`${ing}${measure ? ` - ${measure}` : ""}`);
    }
  }

  return (
    <div>
      <button className="mb-4 text-blue-600" onClick={() => router.back()}>&larr; Back</button>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded w-full md:w-80 h-80 object-cover" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{recipe.strMeal}</h1>
          <FavoriteButton recipeId={id || ''} recipeName={recipe.strMeal} imageUrl={recipe.strMealThumb} isFavorited={favorited} onChange={setFavorited} />
          <h2 className="font-semibold mt-4">Ingredients</h2>
          <ul className="list-disc ml-6 mb-4">
            {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
          <h2 className="font-semibold">Instructions</h2>
          <p className="whitespace-pre-line">{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
} 