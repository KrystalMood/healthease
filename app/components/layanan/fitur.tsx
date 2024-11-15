/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Fitur(): JSX.Element {
  const daftar_layanan = [
    {
      judul: "Fitur AI Canggih",
      deskripsi: "Teknologi kecerdasan buatan terkini untuk diagnosis yang lebih akurat",
      gambar: "/fitur-ai-canggih.jpg",
    },
    {
      judul: "Penjadwalan Otomatis Pintar",
      deskripsi: "Atur jadwal konsultasi dengan mudah menggunakan sistem otomatis",
      gambar: "/penjadwalan-otomatis-pintar.jpg",
    },
    {
      judul: "Manajemen Data Pasien Terpadu",
      deskripsi: "Kelola riwayat medis dan data kesehatan Anda dalam satu platform",
      gambar: "/manajemen-data-pasien-terpadu.jpg",
    },
    {
      judul: "Portal Kesehatan Interaktif",
      deskripsi: "Akses informasi kesehatan dan edukasi medis secara interaktif",
      gambar: "/portal-kesehatan-interaktif.jpg",
    },
    {
      judul: "Telemedicine Berkualitas Tinggi",
      deskripsi: "Konsultasi dokter jarak jauh dengan kualitas layanan terbaik",
      gambar: "/telemedicine-berkualitas-tinggi.jpg",
    },
    {
      judul: "Pengingat Obat Cerdas",
      deskripsi: "Sistem pengingat otomatis untuk jadwal konsumsi obat Anda",
      gambar: "/pengingat-obat-cerdas.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto mb-20 flex w-[90%] gap-x-12">
      <div className="relative hidden lg:flex">
        <span className="absolute inset-0 -z-10 rotate-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500" />
        <img
          src={activeIndex == null ? "/fitur.webp" : daftar_layanan[activeIndex].gambar}
          alt="Fitur Unggulan HealthEase"
          className="h-full max-w-80 rounded-xl object-cover shadow-lg transition-all duration-300 hover:-rotate-3 hover:scale-105"
        />
      </div>
      <div className="relative flex w-fit flex-col rounded-lg border-2 border-emerald-100 bg-white px-12 py-8 shadow-xl">
        <h2 className="cursor-default text-3xl font-bold text-emerald-800 lg:text-5xl">
          Fitur Unggulan Kami
        </h2>
        <h5 className="mt-4 cursor-default text-gray-600">
          Temukan keunggulan&nbsp;
          <span className="font-semibold text-emerald-600">HealthEase</span>,
          dengan fitur-fitur modern yang siap mendukung kebutuhan kesehatan
          Anda. Dari teknologi AI hingga kemudahan akses layanan kesehatan, kami
          hadir untuk memberikan pengalaman terbaik dalam merawat kesehatan
          Anda. Mari jelajahi dan nikmati kemudahan yang kami tawarkan.
        </h5>
        <ul className="mt-8 flex flex-col gap-4">
          {daftar_layanan.map((list, index: number) => (
            <li key={index} className="overflow-hidden rounded-lg border border-emerald-100 shadow-sm">
              <div
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex cursor-pointer items-center justify-between bg-white p-4 transition-all duration-300 hover:bg-emerald-50"
              >
                <div className="flex items-center">
                  <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-200 to-emerald-300 text-emerald-800">
                    {index + 1}
                  </span>
                  <h4 className="text-xl font-semibold">{list.judul}</h4>
                </div>
                <ChevronRight
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="bg-emerald-50 p-4 text-gray-600">
                  {list.deskripsi}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}