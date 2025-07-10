"use client";
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        title="Back to the top"
        onClick={scrollToTop}
        className="fixed bottom-4 right-2 sm:right-4 z-50 bg-white shadow rounded-lg p-2 hover:bg-pink-100"
      >
        <span className="text-red-600 text-2xl">↑</span>
      </button>
    )
  );
};
export default ScrollToTopButton; 