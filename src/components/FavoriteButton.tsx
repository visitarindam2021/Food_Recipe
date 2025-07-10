"use client";
import { useState } from "react";

interface FavoriteButtonProps {
  recipeId: string;
  recipeName: string;
  imageUrl: string;
  isFavorited: boolean;
  onChange: (fav: boolean) => void;
}

const FavoriteButton = ({ recipeId, recipeName, imageUrl, isFavorited, onChange }: FavoriteButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    if (isFavorited) {
      await fetch(`/api/favorites/${recipeId}`, { method: "DELETE" });
      onChange(false);
    } else {
      await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipeId, recipeName, imageUrl }),
      });
      onChange(true);
    }
    setLoading(false);
  };

  return (
    <button
    className={`mt-2 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
      onClick={handleClick}
      disabled={loading}
    >
      {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};
export default FavoriteButton; 