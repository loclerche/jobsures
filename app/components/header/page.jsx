"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="flex-center pl-4 justify-center bg-white shadow-md ">
      <div className="rounded-full bg-white container mx-auto flex justify-between items-center px-4 w-full z-50">
        { /* Logo */}
        <div>
          <img
            src="/assets/logo.png" 
            alt="logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
        </div>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          
          <Link href="/AboutMe" className="text-black hover:text-yellow-400"> Voir les Offres</Link>
          <Link href="/jobpostingform" className="bg-transparent border-2 border-purple-700 text-yello-400 hover:bg-yellow-700 hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300">
            Publier offre
          </Link>
        </nav>

        {/* Menu Burger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 space-y-4 px-4 py-4">
          
          <Link href="#" className="block text-black hover:text-teal-600"></Link>
          <Link href="/AboutMe" className="block text-black hover:text-teal-600"></Link>
          <Link href="/components/creationdecompe" className="block text-black hover:text-teal-600">Voire les Offres</Link>
          <Link href="/loginformpage" className="w-[20rem] block bg-teal-700 text-white px-4 py-2 rounded text-center hover:bg-purple-700">
            Publier offre
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;