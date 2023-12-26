"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <p className="text-white text-lg font-bold">Bengkel App</p>
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} gap-9`}>
            <Link href="/">
              <p className="text-white ">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-white ">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
