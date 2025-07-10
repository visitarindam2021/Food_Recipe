"use client";
import Hero from "@/components/hero";
import CategoriesList from "@/components/categories/CategoriesList";
import RecipeCollection from "@/components/recipes/RecipeCollection";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-6 md:gap-8">
      <Hero />
      <CategoriesList />
      <RecipeCollection />
    </main>
  );
}
