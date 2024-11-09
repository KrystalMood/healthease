import { Link, useLocation } from "@remix-run/react";
import HamburgerMenu from "./hamburger-menu";

export default function Header(): JSX.Element {
  const location = useLocation();
  const getLinkPath = (name: string) => {
    switch (name) {
      case "Layanan":
        return "/layanan";
      case "Informasi Publik":
        return "/informasi-publik";
      case "Tentang Kami":
        return "/tentang-kami";
      default:
        return "/";
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white py-4 shadow-md">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <Link to={`/`} className="text-2xl font-bold tracking-tight text-emerald-600">
          HealthEase
        </Link>
        <nav className="hidden items-center justify-between gap-x-14 lg:flex">
          {["Layanan", "Informasi Publik", "Tentang Kami"].map((menu, i: number) =>
            <Link
              to={getLinkPath(menu)}
              key={i}
              className={`inline-block font-medium transition-all duration-300 hover:scale-105 hover:text-emerald-400 ${
                location.pathname === getLinkPath(menu)
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-gray-800 hover:border-b-2 hover:border-emerald-400"
              }`}
            >
              {menu}
            </Link>
          )}
        </nav>
        <section className="hidden items-center justify-between gap-x-4 lg:flex">
          <Link to={`/daftar`} className="border-1 rounded-md border border-emerald-500 px-6 py-2 text-sm font-semibold text-gray-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-50">
            Daftar
          </Link>
          <Link to={`/reservasi`} className="rounded-md bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald-800">
            Reservasi
          </Link>
        </section>
        <HamburgerMenu />
      </div>
    </header>
  );
}