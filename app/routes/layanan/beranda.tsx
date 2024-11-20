import Hero from "~/components/layanan/hero";
import Footer from "~/common/footer";
import Header from "~/common/header";
import Fitur from "~/components/layanan/fitur";
import LayananKesehatanTerlengkap from "~/components/layanan/layanan-kesehatan-terlengkap";
import { MetaFunction } from "@remix-run/react";
import { useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Layanan | HealthEase" },
    {
      name: "description",
      content:
        "Jelajahi layanan-layanan kesehatan kami yang dirancang untuk memberikan perawatan terbaik dan kenyamanan bagi Anda.",
    },
    { property: "og:title", content: "Layanan | HealthEase" },
    {
      property: "og:description",
      content:
        "Jelajahi layanan-layanan kesehatan kami yang dirancang untuk memberikan perawatan terbaik dan kenyamanan bagi Anda.",
    },
    { property: "twitter:title", content: "Layanan | HealthEase" },
    {
      property: "twitter:description",
      content:
        "Jelajahi layanan-layanan kesehatan kami yang dirancang untuk memberikan perawatan terbaik dan kenyamanan bagi Anda.",
    },
  ];
};
export default function Beranda() {
  const fiturRef = useRef<HTMLElement>(null);
  const scrollToFitur = () => {
    fiturRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <Hero onLearnMore={scrollToFitur} />
      <LayananKesehatanTerlengkap />
      <Fitur ref={fiturRef} />
      <Footer />
    </>
  );
}
