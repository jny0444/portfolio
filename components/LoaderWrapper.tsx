"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always show loader on every page load/reload
    // Keep loader visible for a minimum amount of time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds - enough time to ensure the 'time' state in Navbar is loaded

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}
