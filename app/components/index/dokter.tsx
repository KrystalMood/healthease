import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  job: string;
  email: string;
  phoneNumber: string;
}

const doctorList: Doctor[] = [
  {
    id: 1,
    name: "Dr. Budi Santoso",
    job: "Dokter Jantung",
    email: "budi.santoso@example.com",
    phoneNumber: "0812-3456-7890",
  },
  {
    id: 2,
    name: "Dr. Siti Rahmawati",
    job: "Dokter Anak",
    email: "siti.rahmawati@example.com",
    phoneNumber: "0813-9876-5432",
  },
  {
    id: 3,
    name: "Dr. Agus Pratama",
    job: "Dokter Kulit",
    email: "agus.pratama@example.com",
    phoneNumber: "0811-2233-4455",
  },
  {
    id: 4,
    name: "Dr. Indah Wulandari",
    job: "Dokter Saraf",
    email: "indah.wulandari@example.com",
    phoneNumber: "0812-5566-7788",
  },
  {
    id: 5,
    name: "Dr. Rudi Hartono",
    job: "Ahli Bedah Ortopedi",
    email: "rudi.hartono@example.com",
    phoneNumber: "0813-3344-5566",
  },
  {
    id: 6,
    name: "Dr. Fitri Ayu",
    job: "Dokter Onkologi",
    email: "fitri.ayu@example.com",
    phoneNumber: "0812-9988-7766",
  },
  {
    id: 7,
    name: "Dr. Dedi Saputra",
    job: "Dokter Jiwa",
    email: "dedi.saputra@example.com",
    phoneNumber: "0811-6655-4433",
  },
  {
    id: 8,
    name: "Dr. Laila Syafitri",
    job: "Dokter Kandungan",
    email: "laila.syafitri@example.com",
    phoneNumber: "0813-7788-9900",
  },
  {
    id: 9,
    name: "Dr. Hari Setiawan",
    job: "Dokter Radiologi",
    email: "hari.setiawan@example.com",
    phoneNumber: "0812-8877-6655",
  },
  {
    id: 10,
    name: "Dr. Nita Permata",
    job: "Dokter Anestesi",
    email: "nita.permata@example.com",
    phoneNumber: "0811-5566-9988",
  },
];

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-emerald-100 rounded-xl transform rotate-2"></div>
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="aspect-w-3 aspect-h-4">
          <div className="relative h-64">
            <img
              src="templateAnime.jpg"
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-sm font-medium mb-1">{doctor.job}</p>
              <h3 className="text-white text-xl font-bold tracking-tight">
                {doctor.name}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="h-5 w-5 text-emerald-600" />
            <span className="text-sm truncate">{doctor.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium">{doctor.phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IndexDokter(): JSX.Element {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;
  const currentDoctors = doctorList.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(Math.min(startIndex + itemsPerPage, doctorList.length - itemsPerPage));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 w-[90vw]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-xl tracking-tight">
            Mari berkenalan dengan
            <span className="text-emerald-600"> tim dokter kami.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            Dokter-dokter kami adalah praktisi berpengalaman yang berkomitmen untuk memberikan
            perawatan terbaik. Dengan keahlian di berbagai bidang, mereka siap membantu
            menjaga kesehatan Anda.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg z-10 transition-all duration-200 ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {currentDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex >= doctorList.length - itemsPerPage}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg z-10 transition-all duration-200 ${
              startIndex >= doctorList.length - itemsPerPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="mt-12 flex flex-col items-center space-y-4">
          <div className="text-lg text-gray-600">
            Menampilkan {startIndex + 1}-{Math.min(startIndex + itemsPerPage, doctorList.length)} dari {doctorList.length} dokter
          </div>
          
          <div className="flex items-center gap-8 text-lg text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
              <span>Tersedia untuk konsultasi online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
              <span>Jadwal penuh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}