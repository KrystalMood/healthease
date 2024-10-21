import React from "react";
import { Check } from "lucide-react";

const dailyTasks = [
  "Complete Daily Task",
  "Care of Time Management",
  "Healthy Food",
  "Daily Morning Walk",
  "Drinking Water",
  "Quality Time with Family",
  "Gym Workout",
  "Proper Sound Sleep",
];

export default function IndexAdvantage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container w-[90vw] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <article className="max-w-2xl flex flex-col space-y-6">
          <h4 className="text-emerald-600 font-semibold text-lg tracking-wide">
            Keunggulan Kami
          </h4>

          <h1 className="font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
            Memberikan Layanan Kesehatan Berkualitas dengan Standar
            Internasional
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Kesehatan Anda adalah prioritas kami. Dengan dukungan tim medis
            profesional dan fasilitas modern, kami berkomitmen memberikan
            pelayanan kesehatan terbaik untuk setiap pasien.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {dailyTasks.map((task) => (
              <div
                key={task}
                className="flex items-center space-x-2 text-gray-700 font-medium"
              >
                <Check className="text-emerald-500 h-5 w-5" />
                <span className="text-base">{task}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 flex px-6 py-3 bg-emerald-600 text-white w-fit rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
            Konsultasi Sekarang
          </button>
        </article>

        <div className="relative w-full lg:w-auto flex-shrink-0">
          <div className="absolute top-[-10px] left-[-10px] h-full w-full bg-emerald-200 rounded-lg"></div>
          <img
            src="templateAnime.jpg"
            alt="Gambar Fasilitas Kesehatan :3"
            className="relative w-full max-w-xl h-auto rounded-lg border-4 border-emerald-500 object-cover shadow-xl hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
