import Image from "next/image";

const Page = () => {
  return (
    <div className="md:p-10 p-4">
      <div className="">
        <h1 className="flex justify-center items-center text-3xl underline font-serif mb-6">Jenis Pelayanan</h1>
        <div className="md:px-32 md:py-8 px-10 py-4">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-10 ">
            <div className="border-2 border-black rounded-3xl shadow-lg">
              <Image src="" alt="..." width={200} height={150} className="" />
            </div>
            <div className="border-2 border-black rounded-3xl shadow-lg">
              <Image src="" alt="..." width={200} height={150} className="" />
            </div>
            <div className="border-2 border-black rounded-3xl shadow-lg">
              <Image src="" alt="..." width={200} height={150} className="" />
            </div>
            <div className="border-2 border-black rounded-3xl shadow-lg">
              <Image src="" alt="..." width={200} height={150} className="" />
            </div>
            <div className="border-2 border-black rounded-3xl shadow-lg">
              <Image src="" alt="..." width={200} height={150} className="" />
            </div>
            <div className="border-2 border-black rounded-3xl shadow-lg">
              <Image src="" alt="..." width={200} height={150} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
