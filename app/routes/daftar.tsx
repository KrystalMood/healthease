import type { MetaFunction } from "@remix-run/node";
import Karosel from "~/components/akun/karosel";
import Formulir from "~/components/akun/formulir";

export const meta: MetaFunction = () => {
  return [
    { title: "Daftar | HealthEase" },
    { name: "description", content: "Daftar akun di HealthEase, solusi digital tepercaya yang menyediakan informasi dan layanan kesehatan sesuai kebutuhan Anda." },
    { property: "og:title", content: "Daftar | HealthEase" },
    { property: "og:description", content: "Daftar akun di HealthEase, solusi digital tepercaya yang menyediakan informasi dan layanan kesehatan sesuai kebutuhan Anda." },
    { property: "twitter:title", content: "Daftar | HealthEase" },
    { property: "twitter:description", content: "Daftar akun di HealthEase, solusi digital tepercaya yang menyediakan informasi dan layanan kesehatan sesuai kebutuhan Anda." },
  ];
};

export default function Daftar() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <Karosel />
      <Formulir />
    </main>
  );
}