import type { MetaFunction } from "@remix-run/node";
import Karosel from "~/components/akun/karosel";
import Formulir from "~/components/akun/formulir";

export const meta: MetaFunction = () => {
  return [
    { title: "Masuk | HealthEase" },
    {
      name: "description",
      content:
        "Masuk ke akun HealthEase Anda untuk mengakses layanan kesehatan terpercaya.",
    },
    { property: "og:title", content: "Masuk | HealthEase" },
    {
      property: "og:description",
      content:
        "Masuk ke akun HealthEase Anda untuk mengakses layanan kesehatan terpercaya.",
    },
    { property: "twitter:title", content: "Masuk | HealthEase" },
    {
      property: "twitter:description",
      content:
        "Masuk ke akun HealthEase Anda untuk mengakses layanan kesehatan terpercaya.",
    },
  ];
};

export default function Masuk() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <Karosel />
      <Formulir />
    </main>
  );
} 