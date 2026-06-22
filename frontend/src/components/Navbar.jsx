import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Ankit Umath
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-white">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-600 transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-4 md:hidden">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-white"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="text-2xl text-gray-700 dark:text-white"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">

          <ul className="flex flex-col items-center py-4 space-y-4">

            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="text-gray-700 dark:text-white hover:text-blue-600"
                >
                  {link}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;