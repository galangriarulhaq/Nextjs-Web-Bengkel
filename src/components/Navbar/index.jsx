"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cyan-700 p-6 md:px-48">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <p className="text-white text-lg font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 animate__animated animate__bounceInLeft">Bengkel App</p>
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} gap-9 animate__animated animate__backInRight`}>
            <Link href="/">
              <p className="text-white hover:text-blue-400 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-white hover:text-blue-400 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white hover:text-blue-400 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
