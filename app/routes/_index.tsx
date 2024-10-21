import type { MetaFunction } from "@remix-run/node";
import Footer from "~/common/footer";
import Header from "~/common/header";
import IndexFeatures from "~/components/index/features";
import IndexHero from "~/components/index/hero";
import IndexReview from "~/components/index/review";
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
      <IndexReview />
      <IndexFeatures />
      {/* <IndexWhyUs/> */}
      <Footer />
    </>
  );
}
