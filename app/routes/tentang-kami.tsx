import type { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Hero from "~/components/tentang-kami/hero";
import ApaYangKamiHarapkan from "~/components/tentang-kami/apa-yang-kami-harapkan";
import BertemuSangPendiri from "~/components/tentang-kami/bertemu-sang-pendiri.tsx";
import Header from "~/common/header";
import BertemuDenganTim from "~/components/tentang-kami/bertemu-dengan-tim";
import BergabungBersamaKami from "~/components/tentang-kami/bergabung-bersama-kami";

export const meta: MetaFunction = () => {
  return [
    { title: "Tentang Kami | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "Tentang Kami | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "Tentang Kami | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};

export default function TentangKami() {
  return (
    <>
      <Header />
      <Hero />
      <ApaYangKamiHarapkan />
      <BertemuSangPendiri />
      <BertemuDenganTim />
      <BergabungBersamaKami />
      <Footer />
    </>
  );
}