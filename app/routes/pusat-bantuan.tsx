import { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Header from "~/common/header";

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
  <>
    <Header />
    <Footer />
  </>
}