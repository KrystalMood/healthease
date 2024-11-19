import { Link, useLocation } from "@remix-run/react";
import HamburgerMenu from "./hamburger-menu";
import { useCallback, useEffect, useState } from "react";
import throttle from "lodash/throttle";

export default function Header(): JSX.Element {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNotTop, setIsNotTop] = useState<boolean>(false);
  const SCROLL_THRESHOLD = 0.5;
  const NOT_TOP_THRESHOLD = 0.01;

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

  const handleScroll = useCallback(
    throttle(() => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * SCROLL_THRESHOLD);
      setIsNotTop(scrollPosition > window.innerHeight * NOT_TOP_THRESHOLD);
    }, 100),
    [],
  );

  useEffect(() => {
    if (window.location.pathname === "/informasi-publik") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
      setIsNotTop(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white py-4 transition-all duration-300 ${isScrolled ? "bg-opacity-100" : "bg-opacity-0"} ${isNotTop ? "shadow-md" : "shadow-none"}`}
    >
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <Link
          to={`/`}
          className="text-2xl font-bold tracking-tight text-emerald-600"
        >
          {isScrolled ? (
            <img src="/icon.png" alt="Logo Healthease" className="w-48" />
          ) : (
            <img src="/iconScroll.png" alt="Logo Healthease" className="w-48" />
          )}
        </Link>
        <nav className="hidden items-center justify-between gap-x-14 lg:flex">
          {isScrolled
            ? ["Layanan", "Informasi Publik", "Tentang Kami"].map(
                (menu, i: number) => (
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
                ),
              )
            : ["Layanan", "Informasi Publik", "Tentang Kami"].map(
                (menu, i: number) => (
                  <Link
                    to={getLinkPath(menu)}
                    key={i}
                    className={`inline-block font-medium transition-all duration-300 hover:scale-105 hover:text-emerald-400 ${
                      location.pathname === getLinkPath(menu)
                        ? "border-b-2 border-emerald-300 text-emerald-300"
                        : "text-white hover:border-b-2 hover:border-emerald-400"
                    }`}
                  >
                    {menu}
                  </Link>
                ),
              )}
        </nav>
        <section className="hidden items-center justify-between gap-x-4 lg:flex">
          <Link
            to={`/daftar`}
            className={`border-1 rounded-md border border-emerald-500 px-6 py-2 text-sm font-semibold text-gray-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-50 ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            Daftar
          </Link>
          <Link
            to={`/reservasi`}
            className="rounded-md bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald-800"
          >
            Reservasi
          </Link>
        </section>
        <HamburgerMenu />
      </div>
    </header>
  );
}
