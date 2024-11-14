export interface DataHeroProps {
  title: string;
  description: string;
  image: string;
}

export interface DataFilterProps {
  id: number;
  filter: string;
}

export interface DataPostProps {
  id: number;
  title: string;
  subtitle: string;
  category: TabType;
  date: Date;
  views: number;
  likes: number;
  minsToRead: number;
  creatorProfile: string;
  creatorImage: string;
  image: string;
}

export type DataTabType =
  | "Semua"
  | "Kesehatan Umum"
  | "Gizi & Diet"
  | "Kesehatan Mental"
  | "Kebugaran"
  | "Ibu & Anak"
  | "Penyakit Dalam"
  | "Gigi & Mulut"
  | "Kesehatan Jantung"
  | "Sistem Kekebalan"
  | "Kesehatan Kulit"
  | "Kesehatan Mata"
  | "Kesehatan Reproduksi"
  | "Obat & Farmasi"
  | "Layanan Darurat"
  | "Laboratorium"
  | "Kesehatan Lansia"
  | "Info Vaksinasi";