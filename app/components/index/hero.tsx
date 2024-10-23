import { Link } from "@remix-run/react";

export default function HealthcareHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="min-h-screen max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col space-y-8 max-w-xl pt-20 md:pt-0">
          <div className="flex items-center space-x-2 bg-emerald-50 shadow-sm px-4 py-4 rounded-xl w-fit">
            <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
            <span className="text-lg font-medium text-emerald-700">
              Layanan Kesehatan Terpercaya
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Kesehatan Anda <span className="text-emerald-600">Prioritas</span>{" "}
            Kami
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Kami menyediakan layanan kesehatan profesional dengan dokter
            berpengalaman, tersedia 24/7 untuk kebutuhan medis Anda. Konsultasi
            mudah, aman, dan terpercaya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center px-6 py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-800 hover:scale-[1.05] transition-all duration-500"
            >
              Buat Janji Temu
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-4 bg-white text-emerald-700 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all duration-200"
            >
              Lihat Layanan Kami
            </Link>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">24/7</span>
              <span className="text-sm text-gray-600">Layanan Darurat</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">100+</span>
              <span className="text-sm text-gray-600">Dokter Spesialis</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">50k+</span>
              <span className="text-sm text-gray-600">Review Pasien</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-20"></div>
          <img
            src="/template.jpg"
            alt="Tim Medis Profesional"
            className="w-[500px] h-[500px] object-cover rounded-2xl relative z-10 shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg z-20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-lg font-semibold text-gray-800">
                Pelayanan Tersedia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
