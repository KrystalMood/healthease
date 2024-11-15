/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { DataFilter } from "~/data/informasi-publik";

export default function Filter(): JSX.Element {
  const [currentFilter, setCurrentFilter] = useState<string>("Semua");
  const [sortBy, setSortBy] = useState<string>("Terbaru");
  const [sortOptions] = useState<string[]>([
    "Terbaru",
    "Terlama",
    "Paling Banyak Dilihat",
    "Paling Disukai",
  ]);
  const [showSorting, setShowSorting] = useState<boolean>(false);

  return (
    <section className="mx-auto mt-14 w-[90%]">
      <h2 className="mb-3 cursor-default text-4xl font-bold text-slate-800">
        Informasi Publik
      </h2>
      <p className="mb-8 cursor-default text-lg text-slate-600">
        Jelajahi kategori pilihan kami dan temukan cerita, kiat, dan ide yang
        sesuai dengan Anda.
      </p>
      <nav className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
          {DataFilter().map((list) => (
            <button
              onClick={() => setCurrentFilter(list.filter)}
              key={list.id}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out ${
                currentFilter === list.filter
                  ? "bg-slate-800 text-white shadow-md"
                  : "border-2 border-slate-300 bg-white text-slate-600 hover:border-slate-800 hover:bg-slate-100"
              }`}
            >
              {list.filter}
            </button>
          ))}
        </div>
        <div className="relative flex items-center justify-end lg:justify-start">
          <span className="mr-4 cursor-default font-medium text-slate-600">
            Urutkan:
          </span>
          <button
            onClick={() => setShowSorting((prev) => !prev)}
            aria-expanded={showSorting}
            className="flex items-center rounded-md border-2 border-slate-300 bg-white px-4 py-2.5 text-slate-600 transition-all duration-300 ease-in-out hover:border-slate-800"
          >
            {sortBy}
            {showSorting ? (
              <BiChevronUp className="ml-2 text-xl" />
            ) : (
              <BiChevronDown className="ml-2 text-xl" />
            )}
          </button>
          {showSorting && (
            <div className="absolute right-0 top-12 z-10 w-56 rounded-md border border-slate-200 bg-white shadow-xl lg:left-0 lg:top-11">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setShowSorting(false);
                  }}
                  className="w-full px-5 py-3 text-left text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-100"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </section>
  );
}
