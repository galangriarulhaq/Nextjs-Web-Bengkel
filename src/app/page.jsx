import HomePage from "@/components/HomePage";
import ServicePage from "@/components/ServicePage";
import About from "@/components/About";

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
    </div>
  );
}
