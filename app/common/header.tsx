import { Link } from "@remix-run/react";

export default function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-4 shadow-md">
      <div className="mx-auto max-w-7xl h-10 px-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-600">
          HealthEase
        </h1>

        <nav className="flex space-x-12">
          {[
            "Profile",
            "Jaminan Kesehatan",
            "Layanan",
            "Informasi Publik",
            "Tautan",
          ].map((navigasi) => (
            <Link
              key={navigasi}
              to={`/${navigasi.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-800 font-medium hover:text-emerald-600 hover:scale-105 transition-all duration-300"
            >
              {navigasi}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-4">
          <button className="border border-1 border-emerald-500 text-gray-700 font-semibold  px-6 py-3 shadow-md rounded-md text-sm hover:bg-emerald-500 hover:scale-105 transition-all duration-300">
            Buat Jadwal
          </button>
          <button className="bg-emerald-500 font-semibold text-white px-6 py-3 shadow-md rounded-md text-sm hover:bg-emerald-800 hover:scale-105 transition-all duration-300">
            Kontak Kami
          </button>
        </div>
      </div>
    </header>
  );
}
