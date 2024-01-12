"use client";

import { FacebookLogo, Gear, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <footer className="bg-black text-white py-12 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-2">MMS</h1>
            <h2 className="text-2xl font-bold mb-4">
              BENGKEL MOTOR <Gear size={32} />
            </h2>
            <p>&#169; 2024</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">About</p>
                </Link>
              </li>
              <li>
                <Link href="/product">
                  <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Product</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className=" hover:text-blue-600 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Contact</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-blue-600">
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-600">
                  <FacebookLogo size={32} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-600">
                  <WhatsappLogo size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Page;
