export interface DataFAQProps {
  id: number;
  category: "Umum" | "Akun" | "Pembayaran" | "Fitur" | "Keamanan" | "Dukungan";
  question: string;
  answer: string;
}