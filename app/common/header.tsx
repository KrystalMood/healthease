import { Link, useLocation } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import HamburgerMenu from "./hamburger-menu";
import {
  MENU_ITEMS,
  getLinkPath,
  createScrollHandler,
  getMenuItemClassName,
  isPublicPage
} from "~/utils/header";

export default function Header(): JSX.Element {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNotTop, setIsNotTop] = useState<boolean>(false);

  const handleScroll = useCallback(
    createScrollHandler(setIsScrolled, setIsNotTop),
    []
  );

  useEffect(() => {
    if (isPublicPage(window.location.pathname)) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        handleScroll.cancel();
      };
    } else {
      setIsScrolled(true);
      setIsNotTop(true);
    }
  }, [handleScroll]);

  return (
    <header
      role="banner"
      aria-label="Site header"
      className={`fixed left-0 right-0 top-0 z-50 bg-white py-4 transition-all duration-300 
        ${isScrolled ? "bg-opacity-100" : "bg-opacity-0"} 
        ${isNotTop ? "shadow-md" : "shadow-none"}`}
    >
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-emerald-600"
        >
          <img 
            src={isScrolled ? "/icon.png" : "/iconScroll.png"} 
            alt="Logo Healthease" 
            className="w-48" 
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center justify-between gap-x-14 lg:flex">
          {MENU_ITEMS.map((menu) => (
            <Link
              key={menu}
              to={getLinkPath(menu)}
              className={getMenuItemClassName(
                isScrolled,
                location.pathname === getLinkPath(menu)
              )}
            >
              {menu}
            </Link>
          ))}
        </nav>

        <section className="hidden items-center justify-between gap-x-4 lg:flex">
          <Link
            to="/daftar"
            className={`border-1 rounded-md border border-emerald-500 px-6 py-2 text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-50 
              ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            Daftar
          </Link>
          <Link
            to="/reservasi"
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
