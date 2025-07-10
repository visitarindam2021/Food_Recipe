"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import RecipeCard from "@/components/RecipeCard";

export default function CategoryRecipesPage() {
  const params = useParams();
  const category = Array.isArray(params?.category) ? params.category[0] : params?.category;
  const { data, isLoading } = useSWR(category ? `filter.php?c=${category}` : null, fetcher);
  const recipes = data?.meals || [];

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-white mb-6">{category} Recipes</h1>
      {isLoading && <div className="text-white">Loading...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe: any) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
      {!isLoading && recipes.length === 0 && (
        <div className="text-center text-white mt-8">No recipes found for this category.</div>
      )}
    </div>
  );
}
