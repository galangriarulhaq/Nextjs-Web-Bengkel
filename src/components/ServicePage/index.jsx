import Image from "next/image";

const Page = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center text-3xl text-cyan-500 underline font-bold mb-10">Service</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-10 mb-10">
        <div className="border-2 border-black rounded-3xl">
          <Image src="" alt="..." width={350} height={350} className="w-full max-h-64" />
        </div>
        <div className="border-2 border-black rounded-3xl ">
          <Image src="" alt="..." width={350} height={350} className="w-full max-h-64" />
        </div>
        <div className="border-2 border-black rounded-3xl ">
          <Image src="" alt="..." width={350} height={350} className="w-full max-h-64" />
        </div>
      </div>
    </div>
  );
};

export default Page;
