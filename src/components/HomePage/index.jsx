import Image from "next/image";
import "animate.css";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:py-36 py-24 md:p-24 p-8 w-full ">
      <div className="md:px-16 w-auto animate__animated animate__bounceInLeft">
        <h4 className="font-bold md:text-2xl text-xl text-cyan-500 underline py-4">Bengkel App</h4>
        <h1 className="md:text-4xl text-2xl font-serif ">TOKO BENGKEL </h1>
        <span className="font-light">Melayani service dan penjualan sparepart</span>
        <p className="mt-6 italic">Harga Terjangkau pelayanan cepat</p>
        <button className="bg-blue-500 rounded-full py-2 px-16 text-zinc-50 mt-2 text-sans transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300">See</button>
      </div>
      <div className="flex justify-center items-center animate__animated animate__backInRight ">
        <Image src="/images/bengkel.jpeg" alt="bengkel-logo" width={350} height={350} className="rounded-full px-10 bg-transparent " />
      </div>
    </div>
  );
};

export default Page;
