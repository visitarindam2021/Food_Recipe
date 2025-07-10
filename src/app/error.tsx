'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-lg text-gray-600 mb-8">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        Try again
      </button>
    </div>
  );
} 