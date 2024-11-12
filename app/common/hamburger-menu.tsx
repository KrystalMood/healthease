/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import SidebarMenu from "~/data/sidebar-menu";

export default function HamburgerMenu(): JSX.Element {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const getLinkPath = (name: string) => {
    switch (name) {
      case "Layanan":
        return "/layanan";
      case "Informasi Publik":
        return "/informasi-publik";
      case "Tentang Kami":
        return "/tentang-kami";
      case "Daftar":
        return "/daftar";
      case "Reservasi":
        return "/reservasi";
      default:
        return "/";
    }
  };

  useEffect(() => {
    if (toggleMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [toggleMenu]);

  return (
    <section className="relative lg:hidden">
      {toggleMenu && <span className="absolute z-40 bg-black/75"></span>}
      <span onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer">
        {toggleMenu ? <X className="text-emerald-600" /> : <Menu className="text-emerald-600" />}
      </span>
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-64 bg-slate-100 p-6 transition-transform duration-300 ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-y-4">
          {SidebarMenu.map((menu) => (
            <Link
              to={`${getLinkPath(menu.title)}`}
              key={menu.id}
              className={`flex items-center font-medium transition-all duration-300 hover:scale-105 hover:text-emerald-700 ${
                location.pathname === getLinkPath(menu.title)
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "w-fit text-emerald-800 hover:border-b-2 hover:border-emerald-700"
              }`}
              onClick={() => setToggleMenu(false)}
            >
              {menu.icon}&emsp;
              <h5>{menu.title}</h5>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}