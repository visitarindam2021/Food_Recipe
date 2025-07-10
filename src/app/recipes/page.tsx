"use client";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import RecipeCard from "@/components/RecipeCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSWR(query ? `search.php?s=${query}` : null, fetcher);
  const recipes = data?.meals || [];

  return (
    <div className="max-w-2xl mx-auto py-8">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg mb-6"
      />
      {isLoading && <div>Loading...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe: any) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
      {query && !isLoading && recipes.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No results found. Try a different keyword.</div>
      )}
    </div>
  );
} 