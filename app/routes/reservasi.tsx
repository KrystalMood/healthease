import type { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Header from "~/common/header";
import ReservasiForm from "~/components/reservasi/form";
import Hero from "~/components/reservasi/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Reservasi | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "Reservasi | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "Reservasi | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};

export default function Reservasi() {
  return (
    <>
      <Header />
      <Hero />
      <ReservasiForm />
      <Footer />
    </>
  );
}
