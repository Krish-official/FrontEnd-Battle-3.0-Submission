import { useEffect, useState } from 'react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load - MUST BE UNDER 500ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Safe margin under 500ms

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-oceanic flex items-center justify-center page-loader">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-4 animate-pulse">
          <div className="w-16 h-16 bg-forsythia rounded-xl mx-auto flex items-center justify-center">
            <svg className="w-10 h-10 text-oceanic" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-forsythia rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}