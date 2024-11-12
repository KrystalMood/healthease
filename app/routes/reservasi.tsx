import type { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Header from "~/common/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Reservasi | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "Reservasi | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "Reservasi | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};

export default function Reservasi() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}