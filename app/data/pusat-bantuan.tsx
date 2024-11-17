import { MessageCircle, Clock, CheckCircle2, Users2 } from "lucide-react";
import { FeatureCardProps } from "~/types/pusat-bantuan";

export function Features(): FeatureCardProps[] {
  return [
    {
      icon: MessageCircle,
      title: "Respon Cepat",
      description: "Tim kami siap membantu dengan respons kurang dari 5 menit",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Layanan dukungan tersedia setiap saat untuk Anda",
    },
    {
      icon: CheckCircle2,
      title: "Solusi Tepat",
      description: "98% masalah terselesaikan dalam interaksi pertama",
    },
    {
      icon: Users2,
      title: "Tim Berpengalaman",
      description: "Didukung oleh tim profesional yang terlatih",
    },
  ];
} 