import { useState } from "react";
import { Calendar, Clock, Search } from "lucide-react";

export default function ReservasiForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
  ];

  const specialties = [
    "Dokter Umum",
    "Dokter Gigi",
    "Dokter Anak",
    "Dokter Mata",
    "Dokter Jantung",
    "Dokter Kulit",
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <form className="space-y-8">
          {/* Specialty Selection */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">
              Pilih Spesialisasi
            </label>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  type="button"
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`rounded-lg border-2 p-4 text-left transition-all hover:border-emerald-500 hover:bg-emerald-50 
                    ${selectedSpecialty === specialty 
                      ? "border-emerald-500 bg-emerald-50" 
                      : "border-gray-200"
                    }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          {/* Doctor Selection */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">
              Pilih Dokter
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Cari dokter..."
                className="w-full rounded-lg border border-gray-300 p-4 pl-12 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">
              Pilih Tanggal
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full rounded-lg border border-gray-300 p-4 pl-12 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">
              Pilih Waktu
            </label>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`flex items-center justify-center rounded-lg border p-4 transition-all hover:border-emerald-500 hover:bg-emerald-50
                    ${selectedTime === time 
                      ? "border-emerald-500 bg-emerald-50" 
                      : "border-gray-200"
                    }`}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">
              Keluhan
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-300 p-4 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Deskripsikan keluhan Anda..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Buat Reservasi
            </button>
          </div>
        </form>

        {/* Information Card */}
        <div className="mt-8 rounded-lg bg-emerald-50 p-6">
          <h3 className="text-lg font-medium text-emerald-800">
            Informasi Penting
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-emerald-700">
            <li>• Harap datang 15 menit sebelum jadwal konsultasi</li>
            <li>• Membawa kartu identitas dan kartu BPJS (jika ada)</li>
            <li>• Pembatalan dapat dilakukan maksimal 2 jam sebelum jadwal</li>
            <li>• Konsultasi online tersedia untuk beberapa spesialisasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 