"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({
  activeItem,
  setActiveItem,
}: {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>();

  // Set the initial selectedNav based on the current path when component mounts
  useEffect(() => {
    const currentPath = pathname.slice(1); // Remove the leading slash
    if (["project", "awards", "image", "experience"].includes(currentPath)) {
      setSelectedNav(currentPath);
    } else {
      setSelectedNav(null);
    }
  }, [pathname]);

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

    // Toggle navigation: if already on the same page, go home, otherwise go to the selected page
    if (selectedNav === item) {
      setSelectedNav(null);
      router.push("/");
    } else {
      setSelectedNav(item);
      router.push(`/${item}`);
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
      <div className="flex flex-row justify-between p-4 fixed top-0 left-0 right-0 w-full z-50 select-none text-sm md:text-base bg-gradient-to-b from-white/50 via-white/30 to-transparent backdrop-blur-sm">
        <ul className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-y-0 md:space-x-4 md:justify-between md:w-[20%] w-[50%]">
          {["project", "awards", "image", "experience"].map((item) => (
            <li
              key={item}
              className={`py-1 ${
                activeItem === item ? "cursor-grabbing" : "cursor-grab"
              } ${
                selectedNav && selectedNav !== item
                  ? "text-gray-400"
                  : "text-black"
              }`}
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
            </select>
          </li>
        </ul>
      </div>
      <div className="h-[72px]"></div>
    </>
  );
}
