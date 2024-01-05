import HomePage from "@/components/HomePage";
import ServicePage from "@/components/ServicePage";
import About from "@/components/About";
import ProductPage from "@/components/ProductPage";
import MapPage from "@/components/MapPage";

export default function Home() {
  return (
    <div>
      <section className="">
        <HomePage />
      </section>
      <section className="">
        <About />
      </section>
      <section className="">
        <ServicePage />
      </section>
      <section className="">
        <ProductPage />
      </section>
      <section className="">
        <MapPage />
      </section>
    </div>
  );
}
