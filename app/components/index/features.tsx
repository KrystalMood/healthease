import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface FeatureProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const featureList: FeatureProps[] = [
  {
    id: 1,
    image: "template.jpeg",
    title: "Konsultasi Kesehatan Virtual",
    subtitle:
      "Jadwalkan janji temu dengan profesional kesehatan secara online dari kenyamanan rumah Anda.",
  },
  {
    id: 2,
    image: "template.jpeg",
    title: "Dukungan Kesehatan Mental",
    subtitle:
      "Layanan termasuk sesi terapi, manajemen stres, dan sumber daya kesehatan mental.",
  },
  {
    id: 3,
    image: "template.jpeg",
    title: "Rencana Kesehatan yang Dipersonalisasi",
    subtitle:
      "Area fokus termasuk diet, olahraga, kesejahteraan mental, dan manajemen kondisi kronis.",
  },
  {
    id: 4,
    image: "template.jpeg",
    title: "Manajemen Penyakit Kronis",
    subtitle:
      "Dukungan dan perawatan berkelanjutan untuk mengelola kondisi kronis seperti diabetes, hipertensi, dan penyakit jantung.",
  },
  {
    id: 5,
    image: "template.jpeg",
    title: "Perawatan Pencegahan & Pemeriksaan Kesehatan",
    subtitle:
      "Pemeriksaan rutin dan cek kesehatan yang dirancang untuk mencegah penyakit dan meningkatkan kesehatan jangka panjang.",
  },
  {
    id: 6,
    image: "templateAnime.jpg",
    title: "lorem ipsum",
    subtitle: "lorem ipsum, dolor amet kung lao liu kang fatality",
  },
];

const FeatureCard = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="bg-white rounded-xl p-8 relative">
      <div className="absolute inset-0 bg-emerald-100 rounded-xl transform rotate-2"></div>
      <div className="relative bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">
            {feature.title}
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4 pl-16">
          {feature.subtitle}
        </p>

        <div className="flex items-center text-emerald-600 pl-16">
          <span className="font-medium">Pelajari lebih lanjut</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default function IndexFeatures(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 w-[90vw]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <p className="max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            Akses layanan kesehatan profesional dan solusi kesejahteraan yang
            dipersonalisasi, semuanya dirancang untuk memberikan Anda perawatan
            komprehensif yang disesuaikan dengan kebutuhan dan gaya hidup unik
            Anda.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-xl tracking-tight">
            Temukan solusi kesehatan
            <span className="text-emerald-600"> lengkap kami.</span>
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-200 rounded-xl transform -rotate-3"></div>
              <img
                src="templateAnime.jpg"
                alt="Layanan Kesehatan"
                className="relative rounded-xl shadow-xl w-full h-[400px] object-cover transform transition-transform duration-300"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-6">
              Mengapa Memilih Layanan Kesehatan Kami?
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                  1
                </span>
                <p className="text-lg text-gray-600">
                  Penyedia layanan kesehatan profesional tersedia 24/7
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                  2
                </span>
                <p className="text-lg text-gray-600">
                  Rencana perawatan yang dipersonalisasi sesuai kebutuhan Anda
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                  3
                </span>
                <p className="text-lg text-gray-600">
                  Pemantauan dan dukungan kesehatan yang komprehensif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
