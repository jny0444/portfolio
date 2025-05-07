"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Image() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold">Images</h1>
        <p className="mt-4 text-lg">Coming soon...</p>
      </div>
    </div>
  );
}
