import React from 'react';
import { Bell, Calendar, Cpu, Globe, Server, Video } from "lucide-react";

interface fiturProps {
  name: string;
  subtitle: string;
  manfaat: [string, string, string];
  icon: JSX.Element;
}

const fitur: fiturProps[] = [
  {
    name: "Asisten Virtual Artificial Intelligence (AI)",
    subtitle:
      "Sistem ini dirancang untuk menerima masukan dari pengguna terkait gejala yang mereka alami, di mana setiap gejala akan diolah oleh basis pengetahuan medis yang telah diintegrasikan dalam sistem.",
    manfaat: [
      "Mengurangi waktu diagnostik",
      "Peningkatan akurasi dalam penilaian awal",
      "Dukungan untuk kasus-kasus kompleks",
    ],
    icon: <Cpu size={32} strokeWidth={1.5} />,
  },
  {
    name: "Penjadwalan Otomatis",
    subtitle:
      "Sistem ini dirancang untuk menerima masukan dari pengguna terkait gejala yang mereka alami, di mana setiap gejala akan diolah oleh basis pengetahuan medis yang telah diintegrasikan dalam sistem.",
    manfaat: [
      "Mengurangi waktu diagnostik",
      "Peningkatan akurasi dalam penilaian awal",
      "Dukungan untuk kasus-kasus kompleks",
    ],
    icon: <Calendar size={32} strokeWidth={1.5} />,
  },
  {
    name: "Manajemen Data Pasien",
    subtitle:
      "Sistem ini menyediakan fitur yang dapat menginput, menyimpan, dan mengambil data pasien secara aman. Data yang disimpan meliputi rekam medis elektronik (EMR) yang disusun secara terstruktur, sehingga mudah diakses dan dianalisis oleh tenaga medis yang berwenang.",
    manfaat: [
      "Informasi kesehatan terpusat",
      "Keamanan data yang ditingkatkan",
      "Akses cepat ke riwayat pasien",
    ],
    icon: <Server size={32} strokeWidth={1.5} />,
  },
  {
    name: "Portal Informasi Kesehatan",
    subtitle:
      "Sistem ini bertindak sebagai sumber informasi kesehatan yang dapat diakses oleh pengguna secara luas, baik melalui artikel, video, maupun infografis yang disajikan dengan cara yang mudah dipahami.",
    manfaat: [
      "Akses 24/7 terhadap sumber daya kesehatan",
      "Peningkatan pendidikan pasien",
      "Pengambilan keputusan yang lebih baik",
    ],
    icon: <Globe size={32} strokeWidth={1.5} />,
  },
  {
    name: "Telemedicine",
    subtitle:
      "Sistem ini memungkinkan pasien untuk melakukan konsultasi dengan tenaga medis secara daring melalui berbagai platform, seperti video, audio, maupun chat. Dengan mengatur antrian konsultasi secara otomatis, pasien tidak perlu khawatir mengenai waktu tunggu yang berlebihan.",
    manfaat: [
      "Peningkatan aksesibilitas layanan kesehatan",
      "Mengurangi kebutuhan perjalanan",
      "Pilihan konsultasi yang fleksibel",
    ],
    icon: <Video size={32} strokeWidth={1.5} />,
  },
  {
    name: "Pengingat Pengobatan",
    subtitle:
      "Sistem ini dirancang untuk membantu pasien dalam mengelola pengobatan mereka dengan lebih baik melalui fitur pengingat pengobatan. Jadwal dan dosis obat dapat dimasukkan oleh pengguna atau tenaga medis, dan sistem akan mengirimkan notifikasi sesuai dengan waktu yang telah ditentukan.",
    manfaat: [
      "Peningkatan kepatuhan pengobatan",
      "Mengurangi kesalahan pengobatan",
      "Hasil pengobatan yang lebih baik",
    ],
    icon: <Bell size={32} strokeWidth={1.5} />,
  },
];

export default function LayananFitur() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-8">
          {fitur.map((fitur) => (
            <div
              key={fitur.name}
              className="group relative rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-emerald-200 transition-all duration-300 ease-in-out"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-emerald-100 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
                    <div className="relative bg-emerald-50 rounded-lg p-3">
                      {fitur.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                    {fitur.name}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {fitur.subtitle}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Manfaat Utama
                    </h4>
                    <ul className="space-y-2">
                      {fitur.manfaat.map((manfaat, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                          <span>{manfaat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}