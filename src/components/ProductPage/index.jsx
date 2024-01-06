import Image from "next/image";

const Page = () => {
  return (
    <div className="md:p-8 p-4">
      <h1 className="flex justify-center items-center text-3xl underline font-serif mb-6">Product</h1>
      <div className="md:px-32 md:py-8 px-10 py-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8  ">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <Image src="/images/oli/OliCastrol.jpg" alt="..." width={250} height={250} className="rounded-2xl" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              </div>
            </div>
          </div>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <Image src="/images/oli/OliGardan.jpg" alt="..." width={250} height={250} className="rounded-2xl" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              </div>
            </div>
          </div>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <Image src="/images/oli/OliGardanYamalube.jpg" alt="..." width={250} height={250} className="rounded-2xl" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
