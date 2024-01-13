"use client";

import { List, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? " fixed top-0 w-full backdrop-blur-xl text-black p-6 md:px-48 shadow-lg" : "fixed top-0 w-full bg-black p-6 md:px-48 text-white"}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <p className=" text-3xl font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 animate__animated animate__bounceInLeft ">MMS</p>
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className=" focus:outline-none">
              {isMenuOpen ? <XCircle size={32} /> : <List size={32} />}
            </button>
          </div>
          <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} gap-9 animate__animated animate__backInRight`}>
            <Link href="/">
              <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Home</p>
            </Link>
            <Link href="/about">
              <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">About</p>
            </Link>
            <Link href="/product">
              <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Product</p>
            </Link>
            <Link href="/contact">
              <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
