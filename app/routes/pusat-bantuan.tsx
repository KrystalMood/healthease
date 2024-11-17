import { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Hero from "~/components/pusat-bantuan/hero";
import KritikDanSaran from "~/components/pusat-bantuan/kritik-dan-saran";
import Header from "~/common/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Pusat Bantuan | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "Pusat Bantuan | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "Pusat Bantuan | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};

export default function PusatBantuan() {
  return (
    <>
      <Header />
      <Hero />
      <KritikDanSaran />
      <Footer />
    </>
  );
}