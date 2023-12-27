import HomePage from "@/components/HomePage";
import ServicePage from "@/components/ServicePage";

export default function Home() {
  return (
    <div>
      <section className="w-full">
        <HomePage />
      </section>
      <section className="w-full">
        <ServicePage />
      </section>
    </div>
  );
}
