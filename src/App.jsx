import React, { useState, useRef } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BurgerMenu from "./components/BurgerMenu";
import portfolioImg from "./assets/img.jpg"; // Add your image import

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#2d3743] text-[#d3d3d3] font-['IBM_Plex_Mono'] overflow-hidden">
      {/* Fixed header */}
      <header className="bg-[#1a1a1a] p-2 text-base flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <BurgerMenu
          isOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:relative top-full left-0 right-0 bg-[#1a1a1a] sm:bg-transparent`}
        >
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
            <span
              onClick={() => scrollToSection("home")}
              className="py-3 sm:py-0 mx-2 sm:mr-4 hover:text-[#98be65] cursor-pointer transition-colors"
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection("about")}
              className="py-3 sm:py-0 mx-2 sm:mr-4 hover:text-[#98be65] cursor-pointer transition-colors"
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("projects")}
              className="py-3 sm:py-0 mx-2 sm:mr-4 hover:text-[#98be65] cursor-pointer transition-colors"
            >
              Projects
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className="py-3 sm:py-0 mx-2 sm:mr-4 hover:text-[#98be65] cursor-pointer transition-colors"
            >
              Contact
            </span>
          </div>
        </nav>

        <span className="text-[#4a4a4a] font-['Xanh_Mono']">
          portfolio.html
        </span>
      </header>

      {/* Add overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Scrollable main content */}
      <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#98be65] scrollbar-track-[#1a1a1a] pt-14">
        <div className="container mx-auto p-4 sm:p-8 min-h-full">
          <div className="org-content">
            {/* Title with image */}
            <div id="home" className="mb-6 sm:mb-8 scroll-mt-16">
              <div className="font-['Xanh_Mono']">
                <span className="text-[#98be65] text-2xl sm:text-3xl">◈ </span>
                <span className="text-2xl sm:text-3xl font-bold">
                  Portfolio
                </span>
              </div>
              <div className="flex justify-center">
                <img
                  src={"https://github.com/jny0444/portfolio/blob/main/src/assets/img.jpg?raw=true"}
                  alt="Portfolio banner"
                  className="mt-4 w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div id="about" className="scroll-mt-16">
              <About />
            </div>
            <div id="projects" className="scroll-mt-16">
              <Projects />
            </div>
            <div id="contact" className="scroll-mt-16">
              <Contact />
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Emacs-style footer */}
      <footer className="bg-[#1a1a1a] p-2 text-xs sm:text-sm fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="bg-[#98be65] text-black px-1">--:**-</span>
          <span className="text-[#98be65]">(Sol)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">L1/100</span>
          <span className="text-[#4a4a4a] hidden sm:inline">
            (Digital-Portfolio)
          </span>
          <span className="bg-[#2a2a2a] px-1">UTF-8</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
