import { DataFiturProps } from "~/types/layanan";

export default function DataFitur(): DataFiturProps[] {
  return [
    {
      title: "Fitur AI Canggih",
      description: "Teknologi kecerdasan buatan terkini untuk diagnosis yang lebih akurat",
      image: "/fitur-ai-canggih.jpg",
    },
    {
      title: "Penjadwalan Otomatis Pintar",
      description: "Atur jadwal konsultasi dengan mudah menggunakan sistem otomatis",
      image: "/penjadwalan-otomatis-pintar.jpg",
    },
    {
      title: "Manajemen Data Pasien Terpadu",
      description: "Kelola riwayat medis dan data kesehatan Anda dalam satu platform",
      image: "/manajemen-data-pasien-terpadu.jpg",
    },
    {
      title: "Portal Kesehatan Interaktif",
      description: "Akses informasi kesehatan dan edukasi medis secara interaktif",
      image: "/portal-kesehatan-interaktif.jpg",
    },
    {
      title: "Telemedicine Berkualitas Tinggi",
      description: "Konsultasi dokter jarak jauh dengan kualitas layanan terbaik",
      image: "/telemedicine-berkualitas-tinggi.jpg",
    },
    {
      title: "Pengingat Obat Cerdas",
      description: "Sistem pengingat otomatis untuk jadwal konsumsi obat Anda",
      image: "/pengingat-obat-cerdas.jpg",
    },
  ];
}

export const benefitsData = {
  "fitur-ai-canggih": [
    {
      title: "Diagnosis Lebih Akurat",
      desc: "Teknologi AI kami menganalisis data medis dengan presisi tinggi untuk memberikan diagnosis yang lebih akurat",
    },
    {
      title: "Waktu Lebih Efisien",
      desc: "Proses diagnosis yang lebih cepat memungkinkan penanganan medis yang lebih tepat waktu",
    },
    {
      title: "Pemantauan Real-time",
      desc: "Monitoring kondisi pasien secara real-time dengan bantuan AI untuk deteksi dini",
    },
    {
      title: "Rekomendasi Personal",
      desc: "Saran pengobatan yang dipersonalisasi berdasarkan analisis AI terhadap kondisi spesifik pasien",
    },
  ],
  "penjadwalan-otomatis-pintar": [
    {
      title: "Efisiensi Waktu",
      desc: "Menghemat waktu dengan sistem penjadwalan otomatis yang cepat dan akurat",
    },
    {
      title: "Pengingat Otomatis",
      desc: "Notifikasi jadwal konsultasi untuk memastikan Anda tidak melewatkan janji",
    },
    {
      title: "Fleksibilitas Jadwal",
      desc: "Kemudahan mengatur ulang jadwal sesuai ketersediaan dokter dan pasien",
    },
    {
      title: "Integrasi Kalender",
      desc: "Sinkronisasi dengan kalender pribadi untuk manajemen waktu yang lebih baik",
    },
  ],
  "manajemen-data-pasien-terpadu": [
    {
      title: "Data Terpusat",
      desc: "Semua informasi medis tersimpan dalam satu platform yang aman dan terintegrasi",
    },
    {
      title: "Akses Mudah",
      desc: "Akses cepat ke riwayat medis kapanpun dan dimanapun",
    },
    {
      title: "Keamanan Data",
      desc: "Sistem keamanan berlapis untuk melindungi privasi data kesehatan Anda",
    },
    {
      title: "Sharing Data Efisien",
      desc: "Kemudahan berbagi data dengan tenaga medis yang relevan saat dibutuhkan",
    },
  ],
  "portal-kesehatan-interaktif": [
    {
      title: "Edukasi Komprehensif",
      desc: "Akses ke berbagai materi edukasi kesehatan yang terverifikasi",
    },
    {
      title: "Konten Interaktif",
      desc: "Pembelajaran melalui video, infografis, dan konten interaktif lainnya",
    },
    {
      title: "Forum Diskusi",
      desc: "Wadah diskusi kesehatan dengan sesama pengguna dan tenaga medis",
    },
    {
      title: "Update Berkala",
      desc: "Informasi kesehatan terkini dan tips kesehatan regular",
    },
  ],
  "telemedicine-berkualitas-tinggi": [
    {
      title: "Konsultasi Online",
      desc: "Konsultasi video dengan dokter spesialis tanpa perlu keluar rumah",
    },
    {
      title: "Kualitas HD",
      desc: "Kualitas video dan audio HD untuk pengalaman konsultasi yang optimal",
    },
    {
      title: "Dokter Berpengalaman",
      desc: "Akses ke jaringan dokter spesialis berpengalaman",
    },
    {
      title: "Resep Digital",
      desc: "Penerimaan resep digital langsung setelah konsultasi",
    },
  ],
  "pengingat-obat-cerdas": [
    {
      title: "Notifikasi Tepat Waktu",
      desc: "Pengingat otomatis untuk jadwal minum obat yang tepat",
    },
    {
      title: "Tracking Konsumsi",
      desc: "Pencatatan riwayat konsumsi obat untuk monitoring kepatuhan",
    },
    {
      title: "Informasi Obat",
      desc: "Detail informasi obat termasuk dosis dan efek samping",
    },
    {
      title: "Laporan Berkala",
      desc: "Laporan kepatuhan minum obat untuk evaluasi pengobatan",
    },
  ],
};

export const stepsData = {
  "fitur-ai-canggih": [
    "Input data kesehatan pasien ke dalam sistem",
    "AI menganalisis data berdasarkan database medis yang komprehensif",
    "Sistem menghasilkan rekomendasi diagnosis dan treatment",
    "Dokter melakukan verifikasi dan finalisasi diagnosis",
    "Pasien menerima hasil diagnosis dan rekomendasi pengobatan",
  ],
  "penjadwalan-otomatis-pintar": [
    "Pilih spesialisasi dokter yang diinginkan",
    "Sistem menampilkan slot waktu yang tersedia",
    "Pilih jadwal yang sesuai dengan ketersediaan Anda",
    "Konfirmasi jadwal dan terima notifikasi pengingat",
    "Hadiri konsultasi sesuai jadwal yang ditentukan",
  ],
  "manajemen-data-pasien-terpadu": [
    "Daftar dan verifikasi akun pasien",
    "Upload dokumen medis yang relevan",
    "Organisir data kesehatan dalam kategori yang sesuai",
    "Akses dan update informasi kesehatan secara berkala",
    "Bagikan data dengan tenaga medis saat diperlukan",
  ],
  "portal-kesehatan-interaktif": [
    "Pilih topik kesehatan yang diminati",
    "Akses materi edukasi dalam berbagai format",
    "Ikuti kuis dan evaluasi pemahaman",
    "Berpartisipasi dalam forum diskusi",
    "Dapatkan sertifikat pembelajaran",
  ],
  "telemedicine-berkualitas-tinggi": [
    "Pilih dokter spesialis yang diinginkan",
    "Jadwalkan waktu konsultasi online",
    "Lakukan persiapan teknis (koneksi internet, dll)",
    "Ikuti sesi konsultasi video dengan dokter",
    "Terima resep dan rekomendasi pengobatan",
  ],
  "pengingat-obat-cerdas": [
    "Input jadwal dan informasi obat",
    "Atur pengingat sesuai jadwal minum obat",
    "Terima notifikasi saat waktu minum obat",
    "Konfirmasi pengambilan obat di aplikasi",
    "Monitor riwayat konsumsi obat",
  ],
};