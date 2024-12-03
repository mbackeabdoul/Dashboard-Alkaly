import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav className="w-full bg-white border-b">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#FF0066]">
            Wanterma
          </Link>

          {/* Bouton Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOuvert(!menuOuvert)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOuvert ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Liens de navigation */}
          <div
            className={`md:flex items-center space-x-8 ${
              menuOuvert ? "block" : "hidden"
            } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 p-4 md:p-0`}
          >
            <Link
              to="/tous"
              className="block md:inline text-gray-600 hover:text-gray-900 mb-2 md:mb-0"
            >
              Tous
            </Link>
            <Link
              to="/hommes"
              className="block md:inline text-gray-600 hover:text-gray-900 mb-2 md:mb-0"
            >
              Hommes
            </Link>
            <Link
              to="/femmes"
              className="block md:inline text-gray-600 hover:text-gray-900 mb-2 md:mb-0"
            >
              Femmes
            </Link>
            <Link
              to="/enfants"
              className="block md:inline text-gray-600 hover:text-gray-900 mb-2 md:mb-0"
            >
              Enfants
            </Link>
            <Link
              to="/vente"
              className="block md:inline text-gray-600 hover:text-gray-900 mb-2 md:mb-0"
            >
              Vente
            </Link>
            <Link
              to="/chariot"
              className="block md:inline text-gray-600 hover:text-gray-900"
            >
              Chariot
              <span className="bg-[#FF0066] text-white text-sm rounded-full w-5 h-5 inline-flex items-center justify-center ml-1">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
