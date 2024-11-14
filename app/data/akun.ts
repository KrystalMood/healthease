interface StepByStepType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function StepByStep(): StepByStepType[] {
  return [
    {
      id: 1,
      title: "Langkah Awal",
      description: "Mulailah perjalanan Anda dengan memahami kebutuhan dan tujuan kesehatan Anda.",
      image: "/langkah-awal.jpeg",
    },
    {
      id: 2,
      title: "Dapatkan Manfaatnya",
      description: "Rasakan layanan unggulan kami yang dirancang untuk mendukung kesehatan Anda.",
      image: "/dapatkan-manfaatnya.jpg",
    },
    {
      id: 3,
      title: "Segerakan Konsultasi",
      description: "Hubungi ahli kami untuk mendapatkan solusi yang tepat sesuai kebutuhan Anda.",
      image: "/segerakan-konsultasi.jpg",
    },
  ];
}