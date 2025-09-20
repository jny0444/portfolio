"use client";

import { useState } from "react";
import ListComponent from "./List";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative pb-8 z-50">
      <div className="flex items-center justify-between">
        <p className="text-4xl md:text-6xl font-bold">
          <a href="/">Jny0444.space</a>
        </p>
        {/* Burger icon for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black rounded my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Desktop menu */}
      <ul className="gap-10 text-2xl mt-3 hidden md:flex">
        <ListComponent href="/about">About</ListComponent>
        <ListComponent href="/projects">Projects</ListComponent>
        <ListComponent href="/experience">Experience</ListComponent>
        <ListComponent href="/images">Images</ListComponent>
        <ListComponent href="/blogs">Blogs</ListComponent>
        <ListComponent href="/contact">Contact</ListComponent>
      </ul>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-6 text-2xl mt-3 md:hidden bg-white absolute left-0 right-0 p-6 w-screen -ml-6">
          <ListComponent href="/about" onClick={() => setMenuOpen(false)}>
            About
          </ListComponent>
          <ListComponent href="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </ListComponent>
          <ListComponent href="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </ListComponent>
          <ListComponent href="/images" onClick={() => setMenuOpen(false)}>
            Images
          </ListComponent>
          <ListComponent href="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </ListComponent>
          <ListComponent href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </ListComponent>
        </ul>
      )}
    </nav>
  );
}
