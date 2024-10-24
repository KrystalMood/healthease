import { MetaFunction } from "@remix-run/react";
import Header from "~/common/header";
import LayananHero from "~/components/layanan/hero";
import LayananIntro from "~/components/layanan/intro";

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
    </>
  );
}
