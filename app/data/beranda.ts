/* eslint-disable import/export */
import { DataAlasanMemilihKamiProps, DataHeroProps, DataProsesPelayananProps, DataDokterProps } from "~/types/beranda";

export function HeroProps(): DataHeroProps[] {
  return [
    {
      id: 1,
      data: "24/7",
      subject: "Layanan Darurat",
    },
    {
      id: 2,
      data: "100+",
      subject: "Dokter Spesialis",
    },
    {
      id: 3,
      data: "50k+",
      subject: "Review Pasien",
    },
  ];
}

export function ProsesPelayananProps(): DataProsesPelayananProps[] {
  return [
    {
      id: 1,
      title: "Pilih Layanan yang Anda Butuhkan",
      description: "Kami menyediakan berbagai layanan kesehatan, mulai dari dukungan kesehatan mental hingga manajemen penyakit kronis. Pilih layanan yang paling sesuai dengan kebutuhan Anda.",
    },
    {
      id: 2,
      title: "Buat Janji atau Daftar untuk Layanan",
      description: "Dengan beberapa klik, Anda dapat membuat janji untuk konsultasi atau mendaftar layanan kesehatan secara online. Proses cepat dan mudah.",
    },
    {
      id: 3,
      title: "Terima Perawatan dan Dukungan",
      description: "Setelah terdaftar, tim ahli kami akan memberikan perawatan yang dipersonalisasi sesuai kebutuhan Anda. Dari terapi hingga manajemen kondisi kronis, kami ada untuk mendukung Anda.",
    },
  ];
}

export function AlasanMemilihProps(): DataAlasanMemilihKamiProps[] {
  return [
    {
      id: 1,
      title: "Layanan Terjangkau",
      description: "Pasien HealthEase dapat menghemat hingga 40% biaya pengobatan melalui program asuransi kesehatan yang kami terima.",
    },
    {
      id: 2,
      title: "Proses Pendaftaran Mudah",
      description: "Sistem pendaftaran online yang efisien dan responsif untuk kenyamanan pasien.",
    },
    {
      id: 3,
      title: "Perawatan Berkualitas",
      description: "Tim dokter spesialis berpengalaman dan fasilitas medis modern untuk hasil perawatan optimal.",
    },
  ];
}

export function DataDokter(): DataDokterProps[] {
  return [
    {
      id: 1,
      image: "/budi-santoso.webp",
      name: "Dr. Budi Santoso",
      job: "Dokter Jantung",
      email: "budi.santoso@example.com",
      phone_number: "0812-3456-7890",
    },
    {
      id: 2,
      image: "/siti-rahmawati.avif",
      name: "Dr. Siti Rahmawati",
      job: "Dokter Anak",
      email: "siti.rahmawati@example.com",
      phone_number: "0813-9876-5432",
    },
    {
      id: 3,
      image: "/agus-pratama.jpg",
      name: "Dr. Agus Pratama",
      job: "Dokter Kulit",
      email: "agus.pratama@example.com",
      phone_number: "0811-2233-4455",
    },
    {
      id: 4,
      image: "/indah-wulandari.jpg",
      name: "Dr. Indah Wulandari",
      job: "Dokter Saraf",
      email: "indah.wulandari@example.com",
      phone_number: "0812-5566-7788",
    },
    {
      id: 5,
      image: "/rudi-hartono.webp",
      name: "Dr. Rudi Hartono",
      job: "Ahli Bedah Ortopedi",
      email: "rudi.hartono@example.com",
      phone_number: "0813-3344-5566",
    },
    {
      id: 6,
      image: "/fitri-ayu.jpg",
      name: "Dr. Fitri Ayu",
      job: "Dokter Onkologi",
      email: "fitri.ayu@example.com",
      phone_number: "0812-9988-7766",
    },
    {
      id: 7,
      image: "/dedi-saputra.webp",
      name: "Dr. Dedi Saputra",
      job: "Dokter Jiwa",
      email: "dedi.saputra@example.com",
      phone_number: "0811-6655-4433",
    },
    {
      id: 8,
      image: "/laila-syafitri.jpg",
      name: "Dr. Laila Syafitri",
      job: "Dokter Kandungan",
      email: "laila.syafitri@example.com",
      phone_number: "0813-7788-9900",
    },
    {
      id: 9,
      image: "/hari-setiawan.avif",
      name: "Dr. Hari Setiawan",
      job: "Dokter Radiologi",
      email: "hari.setiawan@example.com",
      phone_number: "0812-8877-6655",
    },
    {
      id: 10,
      image: "/nita-permata.avif",
      name: "Dr. Nita Permata",
      job: "Dokter Anestesi",
      email: "nita.permata@example.com",
      phone_number: "0811-5566-9988",
    },
  ];
}