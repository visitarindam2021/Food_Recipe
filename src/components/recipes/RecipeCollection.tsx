import useSWR from 'swr';
import { fetchWithAreas } from '@/lib/fetcher';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard';

const RecipeCollection = () => {
  const { data, isLoading } = useSWR('filter.php?a', fetchWithAreas);
  const [recipeList, setRecipeList] = useState<any[]>([]);

  useEffect(() => {
    if (!isLoading && data) {
      setRecipeList(data);
    }
  }, [isLoading, data]);

  if (isLoading) return <div>Loading recipes...</div>;
  return (
    <div className='mx-6 flex flex-col gap-6'>
      <div className='flex gap-2'>
        <span className='font-semibold text-orange-500 text-base'>Recipe Collection</span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {recipeList.map((recipe, idx) => (
          <RecipeCard key={recipe.idMeal + idx} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
export default RecipeCollection; 