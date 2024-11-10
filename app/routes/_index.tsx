import type { MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import Hero from "~/components/beranda/hero";
import Perkenalan from "~/components/beranda/perkenalan";
import ProsesPelayanan from "~/components/beranda/proses-pelayanan";
import KeunggulanKami from "~/components/beranda/keunggulan-kami";
import AlasanMemilihKami from "~/components/beranda/alasan-memilih";
import MariBerkenalan from "~/components/beranda/mari-berkenalan";
import Dokter from "~/components/beranda/dokter";
import MulaiPerjalanan from "~/components/beranda/mulai-perjalanan";
import SiapUntukMemulai from "~/components/beranda/siap-untuk-memulai";
import SyaratDanKetentuan from "~/components/beranda/syarat-dan-ketentuan";
import Footer from "~/common/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Beranda | HealthEase" },
    { name: "description", content: "Selamat datang di HealthEase, solusi digital tepercaya yang menyediakan informasi dan layanan kesehatan sesuai kebutuhan Anda." },
    { property: "og:title", content: "Beranda | HealthEase" },
    { property: "og:description", content: "Selamat datang di HealthEase, solusi digital tepercaya yang menyediakan informasi dan layanan kesehatan sesuai kebutuhan Anda." },
    { property: "twitter:title", content: "Beranda | HealthEase" },
    { property: "twitter:description", content: "Selamat datang di HealthEase, solusi digital tepercaya yang menyediakan informasi dan layanan kesehatan sesuai kebutuhan Anda." },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Perkenalan />
      <ProsesPelayanan />
      <KeunggulanKami />
      <AlasanMemilihKami />
      <MariBerkenalan />
      <Dokter />
      <MulaiPerjalanan />
      <SiapUntukMemulai />
      <SyaratDanKetentuan />
      <Footer />
    </>
  );
}
