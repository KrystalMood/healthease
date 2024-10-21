import { Link } from "@remix-run/react";

export default function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-4 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
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
              className="text-gray-800 font-medium hover:text-emerald-600 hover:underline transition-colors duration-200"
            >
              {navigasi}
            </Link>
          ))}
        </nav>

        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </header>
  );
}