"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Experience() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div> 
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <h1 className="text-4xl font-bold">Experience</h1>
      <p className="mt-4 text-lg">Coming soon...</p>
    </div>
  );
}
