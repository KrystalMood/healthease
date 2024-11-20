import DataFitur, { benefitsData, stepsData } from "~/data/layanan";
import Header from "~/common/header";
import Footer from "~/common/footer";
import DetailFiturLayout from "~/components/layanan/detail-fitur-layout";
import { useParams } from "@remix-run/react";

export default function DetailFitur() {
  const { slug } = useParams();
  
  const fitur = DataFitur().find(
    (f) => f.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!fitur) {
    return <div>Fitur tidak ditemukan</div>;
  }

  const manfaat = benefitsData[slug as keyof typeof benefitsData] || [];
  const steps = stepsData[slug as keyof typeof stepsData] || [];

  return (
    <>
      <Header />
      <DetailFiturLayout fitur={fitur} manfaat={manfaat} steps={steps} />
      <Footer />
    </>
  );
}
