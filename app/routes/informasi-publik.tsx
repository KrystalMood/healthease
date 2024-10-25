import { MetaFunction } from "@remix-run/react";
import Footer from "~/common/footer";
import Header from "~/common/header";
import InformasiHero from "~/components/informasi-publik/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Informasi Publik | HealthEase" },
    { name: "description", content: "" },
  ];
};
export default function InformasiPage() {
  return (
    <>
      <Header />
      <InformasiHero />
      <Footer />
    </>
  );
}
