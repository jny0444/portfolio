"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            // Add a small delay before hiding the loader
            setTimeout(() => setIsLoading(false), 300);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 20); // Controls the speed of the progress bar

      return () => clearInterval(interval);
    }, 500); // Initial delay before loading starts

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white">
      <div className="w-16 h-16 mb-2 relative">
        <Image
          src="/load.png"
          alt="Loading"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
