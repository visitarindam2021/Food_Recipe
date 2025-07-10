"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const SearchIcon = (props: any) => (
  <svg 
    {...props} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
    />
  </svg>
);

const Header = () => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setIsSearching(true);
      try {
        await router.push(`/search?query=${encodeURIComponent(search.trim())}`);
        setSearch("");
      } catch (error) {
        console.error('Navigation error:', error);
      } finally {
        setIsSearching(false);
      }
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <header className='flex bg-white p-4 shadow-sm justify-between items-center'>
      <Link href="/" className="font-bold text-xl text-orange-500 hover:text-pink-600 transition-colors">
        RecipeViewer: Discover & Favorite Delicious Meals
      </Link>
      
      <form onSubmit={handleSearch} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-50 px-4 py-2 rounded-full border border-gray-200 focus-within:border-pink-300 focus-within:bg-white transition-all duration-200">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search recipes..."
          className="bg-transparent outline-none text-black px-2 py-1 w-32 sm:w-48 lg:w-64 placeholder-gray-500"
          disabled={isSearching}
        />
        <button 
          type="submit" 
          className={`text-gray-600 hover:text-pink-600 transition-colors ${isSearching ? 'opacity-50 cursor-not-allowed' : ''}`}
          title="Search recipes"
          disabled={isSearching}
        >
          {isSearching ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-pink-600"></div>
          ) : (
            <SearchIcon className="h-5 w-5" />
          )}
        </button>
      </form>
      
      <nav className="flex gap-4 lg:gap-6 ml-4 items-center">
        <Link href="/" className="font-semibold text-lg text-orange-500 hover:text-pink-600 transition-colors">
          All Meals
        </Link>
        <Link href="/favorites" className="font-semibold text-lg text-orange-500 hover:text-pink-600 transition-colors">
          Favorite Meals
        </Link>
        
        {status === 'loading' ? (
          <div className="text-gray-500 text-sm">Loading...</div>
        ) : session ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700 font-medium hidden sm:block">
              {session.user?.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link 
            href="/login" 
            className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};
export default Header;
