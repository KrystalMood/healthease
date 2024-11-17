import { ChevronRight } from "lucide-react";
import { Link } from "@remix-run/react";
export default function ItemFitur({
  index,
  title,
  description,
  isActive,
  onClick,
}: {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <li className="overflow-hidden rounded-lg border border-emerald-100 shadow-sm">
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-between bg-white p-4 transition-all duration-300 hover:bg-emerald-50"
      >
        <div className="flex items-center">
          <span className="mr-4 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-200 to-emerald-300 text-emerald-800 lg:flex">
            {index + 1}
          </span>
          <h4 className="text-left text-xl font-semibold">{title}</h4>
        </div>
        <ChevronRight
          className={`hidden transform transition-transform duration-300 lg:inline ${isActive ? "rotate-90" : ""}`}
        />
      </button>
      {isActive && (
        <div className="bg-emerald-50/50 p-4">
          <p className="text-gray-600">{description}</p>
          <Link 
            to={`/layanan/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="mt-4 inline-flex items-center rounded-lg bg-emerald-100/80 px-4 py-2 text-sm font-medium text-emerald-800 transition-colors duration-200 hover:bg-emerald-200/80"
          >
            Baca Selengkapnya
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </li>
  );
}
