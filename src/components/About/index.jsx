"use client";

import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 md:p-24 p-8 w-auto animate__animated animate__backInUp">
      <div className="shadow-lg rounded-3xl md:p-10">
        <h1 className="text-3xl mb-4 font-serif ">Tentang Kami</h1>
        <p className="text-xl text-gray-900">
          Bengkel Mafia Motoshop berdiri sejak 2017, berlokasi cukup strategis di jalan RE. Martadinata RT001/RW004, Panyingkiran. Mafia Motoshop merupakan bengkel independen dimana melayani berbagai merk sepeda motor seperti Yamaha, Honda
          dan Suzuki. Manajemen pengelolaan dan operasionalnya dilaksanakan secara profesional dimana pemiliknya Bpk Ari Muhamad dan Bpk Bintang Apriansyah mempunyai banyak pengalaman di bidang otomotif.
        </p>
      </div>
      <div className="shadow-lg rounded-3xl md:p-10">
        <h1 className="text-3xl mb-4 font-serif ">Sosial Media </h1>
        <p className="text-xl text-gray-900 mb-4">Jika Anda ingin tahu lebih banyak tentang kami, Anda dapat menghubungi dan mengikuti media sosial di bawah ini.</p>
        <div className="flex flex-row gap-8 mb-4">
          <div className="hover:text-blue-600">
            <Link href="">
              <FacebookLogo size={32} />
            </Link>
          </div>
          <div className="hover:text-blue-600">
            <Link href="">
              <InstagramLogo size={32} />
            </Link>
          </div>
          <div className="hover:text-blue-600">
            <Link href="">
              <WhatsappLogo size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
