import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const data = [
    {
      id: "1",
      images: "OliCastrol.jpg",
      nama: "Oli Castrol",
      harga: "55.000",
      deskripsi: "Its Liquid Engineering",
    },
    {
      id: "2",
      images: "OliSampingMotul.jpg",
      nama: "Oli Samping Motul",
      harga: "80.000",
      deskripsi: "Oli Motor Terpilih Untuk Performa Terbaik",
    },
    {
      id: "3",
      images: "OliMPX2.jpg",
      nama: "Oli MPX 2",
      harga: "45.000",
      deskripsi: "Oli Asli Motor Honda",
    },
    {
      id: "4",
      images: "OliMesranSuper.jpg",
      nama: "Oli Mesran Super",
      harga: "40.000",
      deskripsi: "Tahan Panas Dan Bertenaga",
    },
  ];

  return (
    <div className="md:p-8 p-4">
      <h1 className="flex justify-center items-center text-3xl hover:underline font-serif mb-6 cursor-pointer">Suku Cadang</h1>
      <div className="md:px-32 md:py-8 px-10 py-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {data.map((item) => {
            return (
              <Link href={""} key={item.id} class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:shrink-0">
                    <Image src={`/images/Oli/${item.images}`} alt="..." width={250} height={250} className="rounded-2xl" />
                  </div>
                  <div class="p-8">
                    <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{item.nama}</div>
                    <p class="mt-2 text-slate-500">Harga : Rp.{item.harga}</p>
                    <p class="mt-2 text-slate-500">{item.deskripsi}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
