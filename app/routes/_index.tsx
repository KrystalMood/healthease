import type { MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import IndexHero from "~/components/index/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Beranda | HealthEase" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <IndexHero />
    </>
  );
}
