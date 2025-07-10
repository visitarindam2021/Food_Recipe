"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import RecipeCard from "@/components/RecipeCard";
import { useState, useEffect } from "react";

export default function CategoryRecipesPage() {
  const params = useParams();
  const category = Array.isArray(params?.category) ? params.category[0] : params?.category;
  const decodedCategory = category ? decodeURIComponent(category) : '';
  
  // First try to get recipes by category filter
  const { data: categoryData, isLoading: categoryLoading } = useSWR(
    decodedCategory ? `filter.php?c=${decodedCategory}` : null, 
    fetcher
  );
  
  // If no category results, try search
  const { data: searchData, isLoading: searchLoading } = useSWR(
    categoryData?.meals?.length === 0 ? `search.php?s=${decodedCategory}` : null,
    fetcher
  );
  
  const isLoading = categoryLoading || searchLoading;
  const recipes = categoryData?.meals || searchData?.meals || [];

  // Custom category handling
  const getCustomCategoryRecipes = (categoryName: string) => {
    const customSearches: { [key: string]: string } = {
      'Quick & Easy': 'quick',
      'Healthy': 'healthy',
      'Vegetarian': 'vegetarian',
      'Vegan': 'vegan',
      'Gluten-Free': 'gluten free',
      'Low-Carb': 'low carb',
      'High-Protein': 'protein',
      'Budget-Friendly': 'cheap',
      'Kid-Friendly': 'kid',
      'Party Food': 'party',
      'Breakfast': 'breakfast',
      'Desserts': 'dessert',
      'Soups': 'soup',
      'Salads': 'salad',
      'Pasta': 'pasta'
    };
    
    return customSearches[categoryName] || categoryName;
  };

  // If both category and search fail, try custom search
  const { data: customData, isLoading: customLoading } = useSWR(
    recipes.length === 0 && !isLoading ? `search.php?s=${getCustomCategoryRecipes(decodedCategory)}` : null,
    fetcher
  );

  const allRecipes = recipes.length > 0 ? recipes : (customData?.meals || []);

  return (
    <div className="mx-6 flex flex-col gap-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-orange-500 mb-2">{decodedCategory} Recipes</h1>
        <p className="text-orange-500 text-sm">
          {allRecipes.length > 0 
            ? `Found ${allRecipes.length} recipe${allRecipes.length !== 1 ? 's' : ''}`
            : 'No recipes found for this category'
          }
        </p>
      </div>
      
      {isLoading || customLoading ? (
        <div className="text-white text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="mt-2">Loading recipes...</p>
        </div>
      ) : (
        <>
          {allRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allRecipes.map((recipe: any) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center text-white mt-8">
              <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
                <p className="text-white/70 mb-4">
                  We couldn't find any recipes for "{decodedCategory}". Try browsing other categories or use the search feature.
                </p>
                <a 
                  href="/" 
                  className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Browse All Categories
                </a>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
} 