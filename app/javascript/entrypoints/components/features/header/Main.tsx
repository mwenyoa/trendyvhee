import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsOpen(false); // Close menu on desktop resize
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsSticky(scrollY > 300); // Set sticky if scrolled more than 300px
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full bg-gradient-to-r from-green-600 to-green-900 shadow-xl fixed z-50 top-0 left-0 transition-all duration-300 ${
        isSticky ? "bg-opacity-90" : "bg-opacity-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6 lg:p-8">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-24 text-white">
          <NavLink to="/">
            <img className="h-10 w-10 rounded-full" src="" alt="Logo" />
          </NavLink>
        </div>

        {/* Search input (Desktop) */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search Here..."
            className="p-4 h-12 w-full rounded-full"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 lg:space-x-8">
          {["/", "/Services", "/login", "/register", "/logout"].map(
            (path, index) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {index === 0
                    ? "Categories"
                    : path
                        .replace("/", "")
                        .replace(/^\w/, (c) => c.toUpperCase())}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="md:hidden text-white hover:text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
          onClick={handleMenuToggle}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden transition-transform duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-gradient-to-r from-green-600 to-green-900 p-4">
          <ul className="space-y-4">
            {["/", "/Services", "/login", "/register", "/logout"].map(
              (path, index) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {index === 0
                      ? "Categories"
                      : path
                          .replace("/", "")
                          .replace(/^\w/, (c) => c.toUpperCase())}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search Here..."
              className="p-4 h-12 w-full rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
