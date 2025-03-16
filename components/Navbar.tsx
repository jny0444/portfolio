"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"Grid" | "List">("Grid");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    router.push(`#${selectedYear}`, undefined, { shallow: true });

    // Scroll to the section
    document.getElementById(selectedYear)?.scrollIntoView({ behavior: "smooth" });
  };


  const handleNavClick = (item: string) => {
    setActiveItem(item);

    if (selectedNav === item) {
      setSelectedNav(null);
    } else {
      setSelectedNav(item);
    }

    setTimeout(() => setActiveItem(null), 150);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "Grid" ? "List" : "Grid");
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="flex flex-row justify-between p-4 relative md:fixed md:top-0 md:left-0 md:right-0 md:w-full md:z-50 select-none text-sm md:text-base">
        <ul className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-y-0 md:space-x-4 md:justify-between md:w-[20%] w-[50%]">
          <li
            className={`py-1 ${
              activeItem === "project" ? "cursor-grabbing" : "cursor-grab"
            } ${
              selectedNav && selectedNav !== "project"
                ? "text-gray-400"
                : "text-black"
            } `}
            onMouseDown={() => handleNavClick("project")}
          >
            Project
          </li>
          <li
            className={`py-1 ${
              activeItem === "text" ? "cursor-grabbing" : "cursor-grab"
            } ${
              selectedNav && selectedNav !== "text"
                ? "text-gray-400"
                : "text-black"
            }`}
            onMouseDown={() => handleNavClick("text")}
          >
            Text
          </li>
          <li
            className={`py-1 ${
              activeItem === "image" ? "cursor-grabbing" : "cursor-grab"
            } ${
              selectedNav && selectedNav !== "image"
                ? "text-gray-400"
                : "text-black"
            }`}
            onMouseDown={() => handleNavClick("image")}
          >
            Image
          </li>
          <li
            className={`py-1 ${
              activeItem === "music" ? "cursor-grabbing" : "cursor-grab"
            } ${
              selectedNav && selectedNav !== "music"
                ? "text-gray-400"
                : "text-black"
            }`}
            onMouseDown={() => handleNavClick("music")}
          >
            Music
          </li>
        </ul>

        <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:justify-between md:w-[10%] w-auto">
          <li
            onClick={toggleViewMode}
            className="py-1 text-black cursor-ne-resize"
          >
            {viewMode}
          </li>
          <li className="py-1">
            <select className="w-full md:w-auto cursor-s-resize" onChange={handleSelectChange}>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="hidden md:block md:h-[72px]"></div>
    </>
  );
}
