import { DataHeroProps } from "~/types/informasi-publik";

export default function DataHero(): DataHeroProps[] {
  return [
    {
      title: "Pusat Kesehatan Masyarakat",
      description: "Layanan kesehatan dasar dan preventif di setiap wilayah untuk mendukung kesehatan masyarakat.",
      image: "/pusat-kesehatan-masyarakat.jpg",
    },
    {
      title: "Rumah Sakit Rujukan",
      description: "Pusat layanan kesehatan yang lebih kompleks untuk penanganan kondisi serius.",
      image: "/rumah-sakit-rujukan.jpg",
    },
    {
      title: "Layanan Darurat",
      description: "Layanan 24 jam untuk penanganan darurat medis.",
      image: "/layanan-darurat.jpg",
    },
  ];
}