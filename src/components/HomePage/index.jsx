import Image from "next/image";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:py-48 py-10 p-10 w-full">
      <div className="flex justify-center items-center ">
        <Image src="/images/bengkel.jpeg" alt="bengkel-logo" width={350} height={350} className="rounded-full px-10 bg-transparent" />
      </div>
      <p className="text-xl flex justify-center items-center ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora harum eligendi necessitatibus maiores fugiat dignissimos recusandae maxime, ducimus veritatis ex doloremque similique et sunt inventore perspiciatis aut suscipit
        rerum eius.
      </p>
    </div>
  );
};

export default Page;
