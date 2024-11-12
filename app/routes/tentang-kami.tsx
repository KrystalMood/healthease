import type { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Header from "~/common/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Tentang Kami | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "Tentang Kami | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "Tentang Kami | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};

export default function TentangKami() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}