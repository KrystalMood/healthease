import { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import KritikDanSaran from "~/components/pusat-bantuan/kritik-dan-saran";
import HotLine from "~/components/pusat-bantuan/hotline";
import Header from "~/common/header";
import MengapaKami from "~/components/pusat-bantuan/hero";
import Hero from "~/components/pusat-bantuan/hero";

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
      <section className="grid grid-cols-1 pb-20 lg:grid-cols-2">
        <HotLine />
        <KritikDanSaran />
      </section>
      <Footer />
    </>
  );
}
