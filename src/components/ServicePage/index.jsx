import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const data = [
    {
      id: "1",
      images: "CasAkiMotor.jpeg",
      nama: "Cas Aki Motor",
      deskripsi: "Layanan yang menyediakan pengisian ulang daya aki kendaraan bermotor, layanan pengecasan aki motor sering kali diperlukan ketika pemulihan aki kendaraan mengalami penurunan daya. .",
    },
    {
      id: "2",
      images: "GantiKanvasRem.jpeg",
      nama: "Ganti Kanvas Rem",
      deskripsi: "Layanan yang mencakup penggantian material gesek pada sistem rem kendaraan khususnya kendaraan bermotor, layanan ganti kanvas rem motor umumnya direcomendasikan sebagai bagian dari perawatan perawatan berkala.",
    },
    {
      id: "3",
      images: "GantiOliMesin.jpeg",
      nama: "Ganti Oli Mesin",
      deskripsi: "Prosedur perawatan rutin yang melibatkan penggantian minyak pelumas mesin kendaraan bermotor, oli mesin memiliki peran penting dalam melumasi, mendinginkan.",
    },
    {
      id: "4",
      images: "ServiceCVT.jpeg",
      nama: "Service CVT",
      deskripsi: "Prosedur perawatan dan perbaikan yang ditujukan untuk sistem transmisi otomatis yang menggunakan CVT, CVT merupakan jenis transmisi yang tidak memiliki gigi tetap.",
    },
  ];

  return (
    <div className="md:p-10 p-4">
      <div className="animate__animated animate__bounceInLeft">
        <h1 className="flex justify-center items-center text-3xl hover:underline font-serif mb-6 cursor-pointer">Jenis Pelayanan</h1>
        <div className="md:px-32 md:py-8 px-10 py-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-10 ">
            {data.map((item) => {
              return (
                <Link href={""} key={item.id} class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div class="md:flex">
                    <div class="md:shrink-0 flex justify-center items-center">
                      <Image src={`/images/service/${item.images}`} alt="..." width={250} height={250} className="rounded-2xl " />
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.nama}</div>
                      <p class="mt-2 text-slate-500">{item.deskripsi}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
