import type { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Header from "~/common/header";
import IndexFeatures from "~/components/index/features";
import IndexHero from "~/components/index/hero";
import IndexLogo from "~/components/index/logo";
import IndexIntroduction from "~/components/index/introduction";
import IndexWhyUs from "~/components/index/why-us";

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
      <IndexLogo />
      <IndexIntroduction />
      <IndexFeatures />
      {/* <IndexWhyUs /> */}
      <Footer />
    </>
  );
}
