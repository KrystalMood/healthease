import React from 'react';

interface ProcessProps {
  title: string;
  subtitle: string;
  image: string;
}

const processList: ProcessProps[] = [
  {
    title: "Pilih Layanan yang Anda Butuhkan",
    subtitle:
      "Kami menyediakan berbagai layanan kesehatan, mulai dari konsultasi virtual, dukungan kesehatan mental, hingga manajemen penyakit kronis. Pilih layanan yang paling sesuai dengan kebutuhan Anda.",
    image: "pilih-layanan.jpg",
  },
  {
    title: "Buat Janji atau Daftar untuk Layanan",
    subtitle:
      "Dengan beberapa klik, Anda dapat membuat janji untuk konsultasi atau mendaftar layanan kesehatan secara online. Proses cepat dan mudah.",
    image: "buat-janji.jpg",
  },
  {
    title: "Terima Perawatan dan Dukungan",
    subtitle:
      "Setelah terdaftar, tim ahli kami akan memberikan perawatan yang dipersonalisasi sesuai kebutuhan Anda. Dari terapi hingga manajemen kondisi kronis, kami ada untuk mendukung Anda.",
    image: "terima-perawatan.jpg",
  },
];

export default function IndexIntroduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 ">
      <div className="container mx-auto px-4 py-16 w-[90vw]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-xl tracking-tight">
            Perkenankan saya memaparkan{" "}
            <span className="text-emerald-600">mekanisme kerjanya.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            Kami hadir untuk memandu Anda langkah demi langkah, dari awal hingga
            akhir. Dengan antarmuka yang sederhana dan interaksi yang alami, Anda
            bebas menjelajahi berbagai sumber daya yang kami siapkan khusus untuk
            Anda.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="flex flex-col gap-12 lg:w-1/2">
            {processList.map((list, index) => (
              <div 
                key={list.title} 
                className="transform transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                    {index + 1}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                    {list.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed pl-12">
                  {list.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-200 rounded-xl transform rotate-3"></div>
              <img
                src="templateAnime.jpg"
                alt="Process Illustration"
                className="relative rounded-xl shadow-xl w-full h-[500px] object-cover transform transition-transform duration-300 hover:-rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}