import Image from "next/image";
import "animate.css";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-28 md:p-24 p-8 w-full">
      <div className="md:px-16 w-auto animate__animated animate__bounceInLeft">
        <h1 className="font-bold md:text-3xl text-2xl text-indigo-950 hover:underline py-4 cursor-pointer">SERVICE & PERAWATAN </h1>
        <h2 className="md:text-3xl text-xl font-serif ">MMS</h2>
        <span className="font-light">Mafia Motoshop</span>
        <p className="mt-6 italic">Melayani service dan penjualan suku cadang</p>
        <button className="bg-blue-500 rounded-full py-2 px-16 text-zinc-50 mt-2 text-sans transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300">
          <a href="#about">Detail</a>
        </button>
      </div>
      <div className="flex justify-center items-center animate__animated animate__backInRight ">
        <Image src="/images/Logo.png" alt="bengkel-logo" width={350} height={350} className="rounded-full px-10 bg-transparent " />
      </div>
    </div>
  );
};

export default Page;
