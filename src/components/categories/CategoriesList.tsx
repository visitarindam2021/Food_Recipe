import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import Link from 'next/link';

// Additional custom categories to supplement the API data
const additionalCategories = [
  { idCategory: 'custom-1', strCategory: 'Quick & Easy' },
  { idCategory: 'custom-2', strCategory: 'Healthy' },
  { idCategory: 'custom-3', strCategory: 'Vegetarian' },
  { idCategory: 'custom-4', strCategory: 'Vegan' },
  { idCategory: 'custom-5', strCategory: 'Gluten-Free' },
  { idCategory: 'custom-6', strCategory: 'Low-Carb' },
  { idCategory: 'custom-7', strCategory: 'High-Protein' },
  { idCategory: 'custom-8', strCategory: 'Budget-Friendly' },
  { idCategory: 'custom-9', strCategory: 'Kid-Friendly' },
  { idCategory: 'custom-10', strCategory: 'Party Food' },
  { idCategory: 'custom-11', strCategory: 'Breakfast' },
  { idCategory: 'custom-12', strCategory: 'Desserts' },
  { idCategory: 'custom-13', strCategory: 'Soups' },
  { idCategory: 'custom-14', strCategory: 'Salads' },
  { idCategory: 'custom-15', strCategory: 'Pasta' },
];

// Fallback categories in case API fails
const fallbackCategories = [
  { idCategory: 'fallback-1', strCategory: 'Beef' },
  { idCategory: 'fallback-2', strCategory: 'Chicken' },
  { idCategory: 'fallback-3', strCategory: 'Seafood' },
  { idCategory: 'fallback-4', strCategory: 'Vegetarian' },
  { idCategory: 'fallback-5', strCategory: 'Dessert' },
  { idCategory: 'fallback-6', strCategory: 'Breakfast' },
  { idCategory: 'fallback-7', strCategory: 'Pasta' },
  { idCategory: 'fallback-8', strCategory: 'Soup' },
];

const CategoriesList = () => {
  const { data, isLoading, error } = useSWR('categories.php', fetcher);
  
  if (isLoading) return (
    <div className='z-0 mt-3 flex flex-col gap-6'>
      <div className='flex items-center justify-between px-6'>
        <span className='font-semibold text-white text-lg'>Categories</span>
        <span className='text-white/70 text-sm'>Loading...</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white/20 rounded-lg p-4 min-w-[120px] animate-pulse">
            <div className="h-4 bg-white/30 rounded mb-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Use API categories if available, otherwise use fallback
  const apiCategories = data?.categories || fallbackCategories;
  const allCategories = [...apiCategories, ...additionalCategories];

  return (
    <div className='z-0 mt-3 flex flex-col gap-6'>
      <div className='flex items-center justify-between px-6'>
        <span className='font-semibold text-orange-500 text-lg'>Categories</span>
        <span className='text-white/70 text-sm'>{allCategories.length} categories</span>
      </div>
      
      <div className="relative">
        <Swiper 
          className='categories-swiper'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={12}
          slidesPerView={2}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 24,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
          }}
          scrollbar={{ 
            draggable: true,
            el: '.swiper-scrollbar',
          }}
          a11y={{
            prevSlideMessage: 'Previous category',
            nextSlideMessage: 'Next category',
          }}
        >
          {allCategories.map((category: any) => (
            <SwiperSlide key={category.idCategory} className="pb-6">
              <Link 
                href={`/categories/${encodeURIComponent(category.strCategory)}`} 
                className='flex flex-col justify-center items-center gap-3 bg-gradient-to-br from-white to-gray-50 py-4 px-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-pink-200 group'
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:from-pink-500 group-hover:to-pink-700 transition-all duration-300">
                  {category.strCategory.charAt(0).toUpperCase()}
                </div>
                <span className='text-sm font-medium text-orange-500 text-center leading-tight group-hover:text-pink-600 transition-colors duration-300'>
                  {category.strCategory}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-pink-500 !bg-white/90 !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-white transition-all duration-300 !left-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next !text-pink-500 !bg-white/90 !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-white transition-all duration-300 !right-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-0 !relative mt-4"></div>
      </div>
    </div>
  );
};

export default CategoriesList; 