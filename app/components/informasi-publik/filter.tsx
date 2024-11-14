/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { DataFilter } from "~/data/informasi-publik";

export default function Filter(): JSX.Element {
  const [currentFilter, setCurrentFilter] = useState<string>("Semua");
  const [sortBy, setSortBy] = useState<string>("Terbaru");
  const [sortOptions] = useState<string[]>(["Terbaru", "Terlama", "Paling Banyak Dilihat", "Paling Disukai"]);
  const [showSorting, setShowSorting] = useState<boolean>(false);

  return (
    <section className="mx-auto mt-14 w-[90%]">
      <h3 className="cursor-default text-3xl font-bold">Informasi Publik</h3>
      <h5 className="mt-2 cursor-default text-lg text-slate-600">
        Jelajahi kategori pilihan kami dan temukan cerita, kiat, dan ide yang
        sesuai dengan Anda.
      </h5>
      <nav className="mt-4 flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="flex gap-3 overflow-x-scroll">
          {DataFilter().map(list =>
            <button
              onClick={() => setCurrentFilter(list.filter)}
              key={list.id}
              className={`rounded-md border-2 border-slate-800 px-5 py-2 text-sm font-semibold text-slate-50 transition-all duration-500 ease-in-out lg:hover:bg-slate-800 lg:hover:text-slate-100 ${
                currentFilter === list.filter ? "bg-slate-800 text-slate-100" : "text-slate-600"
              }`}
            >
              {list.filter}
            </button>
          )}
        </div>
        <div className="relative mt-4 flex items-center justify-end lg:mt-0 lg:justify-start">
          <h4 className="mr-4 cursor-default">Sort by:</h4>
          <button
            onClick={() => setShowSorting(prev => !prev)}
            aria-expanded={showSorting}
            className="flex cursor-pointer items-center rounded-md border-2 border-slate-800 py-2 pl-5 pr-3 text-slate-600"
          >
            {sortBy}
            {showSorting ? <BiChevronUp className="ml-1 text-xl" /> : <BiChevronDown className="ml-1 text-xl" />}
          </button>
          {showSorting && (
            <div className="absolute right-0 top-12 z-10 w-48 rounded-md border border-slate-800 bg-white shadow-lg lg:left-0 lg:top-10">
              {sortOptions.map(option =>
                <button
                  key={option}
                  onClick={() => { setSortBy(option), setShowSorting(false) }}
                  className="w-full px-5 py-3 text-left text-sm text-slate-600 hover:bg-slate-800 hover:text-slate-100"
                >
                  {option}
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </section>
  );
}