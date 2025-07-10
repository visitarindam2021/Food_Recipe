import React, { useState, useEffect } from "react";
// TODO: Replace with actual Salad SVG icon import
const Salad = (props: any) => <span {...props}>🥗</span>;

const Hero = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowSkeleton(false), 75);
  }, []);

  return (
    <>
      {showSkeleton ? (
        <div className="w-full h-40 bg-yellow-100 rounded-2xl animate-pulse" />
      ) : (
        <div className="w-full px-6">
          <div className="w-full bg-yellow-200/90 rounded-2xl shadow p-4 flex flex-col items-center justify-center min-h-[200px] md:min-h-[220px]">
            <div className='flex flex-col gap-2 text-center'>
              <h1 className='text-xl md:text-2xl text-amber-800 flex items-center justify-center gap-2'>
                Let’s Embark on Your Culinary Journey
                <Salad className="inline-block align-middle text-2xl md:text-3xl" />
              </h1>
              <span className='font-bold text-red-600 text-2xl md:text-3xl'>Discover Your Favorite Recipes Here</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Hero; 