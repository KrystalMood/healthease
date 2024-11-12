import { Cpu, Calendar, Server, Globe, Video, Bell } from "lucide-react";
import { DataFiturProps } from "~/types/layanan";

export default function DataFitur(): DataFiturProps[] {
  return [
    {
      name: "Asisten AI",
      description: "Sistem ini dirancang untuk menerima masukan dari pengguna terkait gejala yang mereka alami, di mana setiap gejala akan diolah oleh basis pengetahuan medis yang telah diintegrasikan dalam sistem.",
      advantages: [
        "Mengurangi waktu diagnostik",
        "Peningkatan akurasi dalam penilaian awal",
        "Dukungan untuk kasus-kasus kompleks",
      ],
      icon: <Cpu size={24} />,
    },
    {
      name: "Penjadwalan Otomatis",
      description: "Sistem ini dirancang untuk menerima masukan dari pengguna terkait gejala yang mereka alami, di mana setiap gejala akan diolah oleh basis pengetahuan medis yang telah diintegrasikan dalam sistem.",
      advantages: [
        "Mengurangi waktu diagnostik",
        "Peningkatan akurasi dalam penilaian awal",
        "Dukungan untuk kasus-kasus kompleks",
      ],
      icon: <Calendar size={24} />,
    },
    {
      name: "Manajemen Data Pasien",
      description: "Sistem ini menyediakan fitur yang dapat menginput, menyimpan, dan mengambil data pasien secara aman. Data yang disimpan meliputi rekam medis elektronik (EMR) yang disusun secara terstruktur, sehingga mudah diakses dan dianalisis oleh tenaga medis yang berwenang.",
      advantages: [
        "Informasi kesehatan terpusat",
        "Keamanan data yang ditingkatkan",
        "Akses cepat ke riwayat pasien",
      ],
      icon: <Server size={24} />,
    },
    {
      name: "Portal Informasi",
      description: "Sistem ini bertindak sebagai sumber informasi kesehatan yang dapat diakses oleh pengguna secara luas, baik melalui artikel, video, maupun infografis yang disajikan dengan cara yang mudah dipahami.",
      advantages: [
        "Akses 24/7 terhadap sumber daya kesehatan",
        "Peningkatan pendidikan pasien",
        "Pengambilan keputusan yang lebih baik",
      ],
      icon: <Globe size={24} />,
    },
    {
      name: "Telemedicine",
      description: "Sistem ini memungkinkan pasien untuk melakukan konsultasi dengan tenaga medis secara daring melalui berbagai platform, seperti video, audio, maupun chat. Dengan mengatur antrian konsultasi secara otomatis, pasien tidak perlu khawatir mengenai waktu tunggu yang berlebihan.",
      advantages: [
        "Peningkatan aksesibilitas layanan kesehatan",
        "Mengurangi kebutuhan perjalanan",
        "Pilihan konsultasi yang fleksibel",
      ],
      icon: <Video size={24} />,
    },
    {
      name: "Pengingat Pengobatan",
      description: "Sistem ini dirancang untuk membantu pasien dalam mengelola pengobatan mereka dengan lebih baik melalui fitur pengingat pengobatan. Jadwal dan dosis obat dapat dimasukkan oleh pengguna atau tenaga medis, dan sistem akan mengirimkan notifikasi sesuai dengan waktu yang telah ditentukan.",
      advantages: [
        "Peningkatan kepatuhan pengobatan",
        "Mengurangi kesalahan pengobatan",
        "Hasil pengobatan yang lebih baik",
      ],
      icon: <Bell size={24} />,
    },
  ];
}