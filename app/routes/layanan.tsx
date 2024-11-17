import type { MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import Hero from "~/components/layanan/hero";
import LayananKesehatanTerlengkap from "~/components/layanan/layanan-kesehatan-terlengkap";
import Fitur from "~/components/layanan/fitur";
import Footer from "~/common/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Layanan | HealthEase" },
    { name: "description", content: "Jelajahi layanan-layanan kesehatan kami yang dirancang untuk memberikan perawatan terbaik dan kenyamanan bagi Anda." },
    { property: "og:title", content: "Layanan | HealthEase" },
    { property: "og:description", content: "Jelajahi layanan-layanan kesehatan kami yang dirancang untuk memberikan perawatan terbaik dan kenyamanan bagi Anda." },
    { property: "twitter:title", content: "Layanan | HealthEase" },
    { property: "twitter:description", content: "Jelajahi layanan-layanan kesehatan kami yang dirancang untuk memberikan perawatan terbaik dan kenyamanan bagi Anda." },
  ];
};

export default function Layanan() {
  return (
    <>
      <Header />
      <Hero />
      <LayananKesehatanTerlengkap />
      <Fitur />
      <Footer />
    </>
  );
}