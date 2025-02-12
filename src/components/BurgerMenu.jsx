import React from "react";

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="sm:hidden p-2 focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="w-6 flex flex-col gap-1">
        <span
          className={`block h-0.5 w-full bg-[#98be65] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-[#98be65] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-[#98be65] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </div>
    </button>
  );
};

export default BurgerMenu;
