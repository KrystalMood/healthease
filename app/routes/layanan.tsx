import { MetaFunction } from "@remix-run/react";
import Footer from "~/common/footer";
import Header from "~/common/header";
import LayananFitur from "~/components/layanan/fitur";
import LayananHero from "~/components/layanan/hero";
import LayananIntro from "~/components/layanan/intro";
import LayananOutro from "~/components/layanan/outro";

export const meta: MetaFunction = () => {
  return [
    { title: "Layanan | HealthEase" },
    { name: "description", content: "" },
  ];
};
export default function LayananPage() {
  return (
    <>
      <Header />
      <LayananHero />
      <LayananIntro />
      <LayananFitur />
      <LayananOutro />
      <Footer />
    </>
  );
}
