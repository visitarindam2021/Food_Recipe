export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-indigo-600 hover:underline">Go back home</a>
    </div>
  );
} 