import { ChevronRight } from "lucide-react";

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
      <button onClick={onClick} className="flex w-full cursor-pointer items-center justify-between bg-white p-4 transition-all duration-300 hover:bg-emerald-50">
        <div className="flex items-center">
          <span className="mr-4 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-200 to-emerald-300 text-emerald-800 lg:flex">
            {index + 1}
          </span>
          <h4 className="text-left text-xl font-semibold">{title}</h4>
        </div>
        <ChevronRight className={`hidden transform transition-transform duration-300 lg:inline ${isActive ? "rotate-90" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <h5 className="bg-emerald-50 p-4 text-gray-600">{description}</h5>
      </div>
    </li>
  );
}