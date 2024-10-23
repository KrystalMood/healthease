import { useState } from "react";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

interface PatientReview {
  id: string;
  patientName: string;
  serviceType: string;
  date: string;
  treatmentType?: string;
  content: string;
  image?: string;
  verifiedPatient: boolean;
}

const healthEaseReviews: PatientReview[] = [
  {
    id: "he001",
    patientName: "Rachel Anderson",
    serviceType: "Fisioterapi",
    date: "18-10-2023",
    treatmentType: "Rehabilitasi Cedera Olahraga",
    content:
      "Program fisioterapi di HealthEase benar-benar sesuai dengan yang saya butuhkan. Terapisnya sangat profesional dan peduli. Setelah enam minggu perawatan, mobilitas bahu saya meningkat secara signifikan. Fasilitas modern dan jadwal yang fleksibel membuat proses pemulihan menjadi jauh lebih mudah.",
    image: "/images/patients/rachel.jpg",
    verifiedPatient: true,
  },
  {
    id: "he002",
    patientName: "James Wilson",
    serviceType: "Perawatan Pencegahan",
    date: "05-11-2023",
    treatmentType: "Pemeriksaan Kesehatan Tahunan",
    content:
      "Pemeriksaan kesehatan di HealthEase sangat menyeluruh dan informatif. Tim medis meluangkan waktu untuk menjelaskan setiap hasil tes dan memberikan rekomendasi gaya hidup yang praktis. Saya menghargai pendekatan pencegahan mereka terhadap kesehatan.",
    image: "/images/patients/james.jpg",
    verifiedPatient: true,
  },
  {
    id: "he003",
    patientName: "Maria Garcia",
    serviceType: "Konseling Nutrisi",
    date: "22-11-2023",
    treatmentType: "Manajemen Diabetes",
    content:
      "Bekerja dengan ahli gizi di HealthEase telah mengubah cara saya mengelola diabetes. Mereka memberikan rencana makan dan tips gaya hidup yang praktis dan mudah diikuti. Setelah tiga bulan, kadar gula darah saya stabil, dan saya merasa lebih berenergi.",
    image: "/images/patients/maria.jpg",
    verifiedPatient: true,
  },
  {
    id: "he004",
    patientName: "Robert Kim",
    serviceType: "Telemedicine",
    date: "30-11-2023",
    treatmentType: "Konsultasi Tindak Lanjut",
    content:
      "Layanan telemedicine di HealthEase luar biasa. Konsultasi virtual berjalan lancar, dan dokternya sama perhatian seperti pertemuan tatap muka. Bisa mendapatkan nasihat medis dari rumah membuat pengelolaan kondisi kronis saya menjadi jauh lebih nyaman.",
    image: "/images/patients/robert.jpg",
    verifiedPatient: true,
  },
];

interface NavigationButtonProps {
  onClick: () => void;
  disabled: boolean;
  icon: LucideIcon;
}
const NavigationButton = ({ onClick, disabled, icon: Icon } : NavigationButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-2 rounded-full transition-all duration-200 
      ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 shadow-sm hover:shadow"
      } border border-gray-200`}
  >
    <Icon className="w-5 h-5" />
  </button>
);

export default function PatientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = healthEaseReviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, healthEaseReviews.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Review Klien Tercinta Kami
              </h1>
              <p className="text-lg text-gray-600">
                Pengalaman nyata dari pasien yang telah mempercayakan kesehatan
                mereka kepada kami
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {currentReview.serviceType}
                  </h3>
                  {currentReview.treatmentType && (
                    <p className="text-sm font-medium text-gray-500">
                      {currentReview.treatmentType}
                    </p>
                  )}
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  {currentReview.content}
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {currentReview.patientName}
                        </h3>
                        {currentReview.verifiedPatient && (
                          <BadgeCheck className="w-5 h-5 text-emerald-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {currentReview.date}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <NavigationButton
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        icon={ChevronLeft}
                      />
                      <NavigationButton
                        onClick={handleNext}
                        disabled={currentIndex === healthEaseReviews.length - 1}
                        icon={ChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src="templateAnime.jpg"
                alt="Patient Review"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-50 to-purple-50 blur-3xl opacity-30 rounded-full transform translate-x-8 translate-y-8" />
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {healthEaseReviews.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-emerald-500"
                  : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
