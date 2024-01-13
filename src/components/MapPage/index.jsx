"use client";

import { MapPinLine, TelegramLogo } from "@phosphor-icons/react";
import Contact from "./Contact";

const Page = () => {
  return (
    <div className="md:p-4 p-2">
      <div className="mb-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8  ">
          <div className="">
            <h1 className=" text-3xl hover:underline cursor-pointer font-serif p-4 flex justify-center items-center">
              Lokasi
              <MapPinLine size={32} />
            </h1>
            <div className="md:p-4 p-2 flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.9401060641749!2d108.20609005605124!3d-7.304812222232974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f50c5b03725eb%3A0xa68dde0fd819e9fc!2sToko%20Obras%20Mutiara!5e0!3m2!1sid!2sid!4v1704457754247!5m2!1sid!2sid"
                width={600}
                height={450}
                style={{ border: 2 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="">
            <h1 className=" text-3xl hover:underline cursor-pointer font-serif p-4 mb-2 flex justify-center items-center">
              Kontak
              <TelegramLogo size={32} />
            </h1>
            <div className="p-2 flex justify-center items-center">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
