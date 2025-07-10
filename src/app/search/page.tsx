"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import RecipeCard from "@/components/RecipeCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams?.get('query') || '';
  const [query, setQuery] = useState(urlQuery);
  
  // Update local state when URL query changes
  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const { data, isLoading } = useSWR(query ? `search.php?s=${query}` : null, fetcher);
  const recipes = data?.meals || [];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Search Recipes</h1>
        <p className="text-white/70">
          {query ? `Searching for: "${query}"` : 'Enter a recipe name or ingredient to search'}
        </p>
      </div>
      
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg bg-white"
        />
      </div>
      
      {isLoading && (
        <div className="text-center text-white py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="mt-2">Searching recipes...</p>
        </div>
      )}
      
      {!isLoading && query && (
        <div className="mb-4">
          <p className="text-white/70">
            {recipes.length > 0 
              ? `Found ${recipes.length} recipe${recipes.length !== 1 ? 's' : ''}`
              : 'No recipes found'
            }
          </p>
        </div>
      )}
      
      {recipes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe: any) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
      
      {query && !isLoading && recipes.length === 0 && (
        <div className="text-center text-white mt-8">
          <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
            <p className="text-white/70 mb-4">
              We couldn't find any recipes for "{query}". Try searching for different keywords or browse our categories.
            </p>
            <a 
              href="/" 
              className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Browse Categories
            </a>
          </div>
        </div>
      )}
    </div>
  );
} 