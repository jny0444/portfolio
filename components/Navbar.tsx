"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({
  activeItem,
  setActiveItem,
}: {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
}) {
  const router = useRouter();
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    router.push(`#${selectedYear}`, undefined);

    document
      .getElementById(selectedYear)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (activeItem !== null) {
    document.querySelectorAll(`.${activeItem}`).forEach((el) => {
      el.classList.add("display-none");
    });
  }
  
  const handleNavClick = (item: string) => {
    setActiveItem(item);

    if (selectedNav === item) {
      setSelectedNav(null);
    } else {
      setSelectedNav(item);
    }

    setTimeout(() => setActiveItem(null), 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between p-4 relative md:fixed md:top-0 md:left-0 md:right-0 md:w-full md:z-50 select-none text-sm md:text-base">
        <ul className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-y-0 md:space-x-4 md:justify-between md:w-[20%] w-[50%]">
          {["project", "text", "image", "music"].map((item) => (
            <li
              key={item}
              className={`py-1 ${
                activeItem === item ? "cursor-grabbing" : "cursor-grab"
              } ${
                selectedNav && selectedNav !== item
                  ? "text-gray-400"
                  : "text-black"
              } `}
              onMouseDown={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:justify-between md:w-[15%] w-auto">
          <li className="py-1 text-black cursor-ne-resize">{time}</li>
          <li className="py-1">
            <select
              className="w-full md:w-auto cursor-s-resize"
              onChange={handleSelectChange}
            >
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
