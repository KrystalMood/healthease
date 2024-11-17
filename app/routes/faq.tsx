import { MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import Hero from "~/components/faq/hero";
import DaftarPertanyaan from "~/components/faq/daftar-pertanyaan";
import Footer from "~/common/footer";
import PertanyaanPopuler from "~/components/faq/pertanyaan-populer";
import HubungiKami from "~/components/faq/hubungi-kami";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "FAQ | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "FAQ | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};

export default function FAQ() {
  return (
    <>
      <Header />
      <Hero />
      <PertanyaanPopuler />
      <DaftarPertanyaan />
      <HubungiKami />
      <Footer />
    </>
  );
}
