import { MetaFunction } from "@remix-run/react";
import Header from "~/common/header";
import InformasiHero from "~/components/informasi-publik/hero";
import IndexContentSection from "~/components/informasi-publik/content";
import Footer from "~/common/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Informasi Publik | HealthEase" },
    { name: "description", content: "Dapatkan informasi terkini mengenai kesehatan untuk membantu Anda menjalani hidup sehat dan sejahtera." },
    { property: "og:title", content: "Informasi Publik | HealthEase" },
    { property: "og:description", content: "Dapatkan informasi terkini mengenai kesehatan untuk membantu Anda menjalani hidup sehat dan sejahtera." },
    { property: "twitter:title", content: "Informasi Publik | HealthEase" },
    { property: "twitter:description", content: "Dapatkan informasi terkini mengenai kesehatan untuk membantu Anda menjalani hidup sehat dan sejahtera." },
  ];
};
export default function InformasiPage() {
  return (
    <>
      <Header />
      <InformasiHero />
      <IndexContentSection />
      <Footer />
    </>
  );
}
