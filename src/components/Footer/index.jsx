"use client";

import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

const Page = () => {
  return (
    <footer className="bg-cyan-700 text-white py-12 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">BENGKEL MOTOR</h2>
            <p>&#169; 2024</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <FacebookLogo size={32} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
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
