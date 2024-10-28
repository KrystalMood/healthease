import { Link, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface navProps {
  name: string;
}

const navList: navProps[] = [
  {
    name: "Home",
  },
  {
    name: "Layanan",
  },
  {
    name: "Informasi Publik",
  },
  {
    name: "Tentang Kami",
  },
];
export default function Header(): JSX.Element {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const getLinkPath = (name: string) =>
    `/${name === "Home" ? "" : name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    // Buat Desktop
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-4 shadow-md">
      <div className="mx-auto max-w-7xl h-7 px-2 flex items-center justify-between">
        <h1 className="ml-4 lg:ml-0 text-2xl font-bold tracking-tight text-emerald-600">
          HealthEase
        </h1>

        <nav className="hidden lg:flex space-x-12">
          {navList.map((navigasi) => {
            const path = getLinkPath(navigasi.name);
            return (
              <Link
                key={navigasi.name}
                to={path}
                className={`font-medium hover:text-emerald-600 hover:scale-105 transition-all duration-300 ${
                  location.pathname === path
                    ? "border-b-[3px] border-emerald-600 text-emerald-600"
                    : "text-gray-800"
                }`}
              >
                {navigasi.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex space-x-4">
          <button className="border border-1 border-emerald-500 text-gray-700 font-semibold  px-6 py-2 shadow-md rounded-md text-sm hover:bg-emerald-500 hover:scale-105 transition-all duration-300">
            Daftar
          </button>
          <button className="bg-emerald-500 font-semibold text-white px-6 py-2 shadow-md rounded-md text-sm hover:bg-emerald-800 hover:scale-105 transition-all duration-300">
            Reservasi
          </button>
        </div>

        {/* Iki mobile bos */}
        <button className="lg:hidden mr-4" onClick={handleClick}>
          <Menu />
        </button>
        <div
          className={`absolute top-0 right-0 w-[50vw] lg:hidden h-screen shadow-lg bg-gray-50 ${
            isActive ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between px-[1.4rem] py-[1.4rem] items-center">
            <h1 className="text-lg font-semibold">Menu</h1>
            <button onClick={handleClick}>
              <X />
            </button>
          </div>
          <hr className="border-t-2 border-gray-200 mx-auto" />
          <nav className="flex flex-col space-y-4 px-[1.4rem] py-[1.4rem]">
            {navList.map((navigasi) => {
              const path = getLinkPath(navigasi.name);
              return (
                <>
                  <Link
                    key={navigasi.name}
                    to={`/${navigasi.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={` font-medium hover:text-emerald-600 hover:scale-105 transition-all duration-300 ${
                      location.pathname === path
                        ? "border-b-[3px] border-emerald-600 w-fit text-emerald-600"
                        : "text-gray-600"
                    }`}
                  >
                    {navigasi.name}
                  </Link>
                  <hr />
                </>
              );
            })}
          </nav>
          <div className="flex space-x-4 px-[1.4rem] py-[1.4rem]">
            <button className="border border-1 w-full border-emerald-500 text-gray-700 font-semibold  px-6 py-3 shadow-md rounded-md text-sm hover:bg-emerald-500 hover:scale-105 transition-all duration-300">
              Daftar
            </button>
            <button className="bg-emerald-500 w-full font-semibold text-white px-6 py-3 shadow-md rounded-md text-sm hover:bg-emerald-800 hover:scale-105 transition-all duration-300">
              Reservasi
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
