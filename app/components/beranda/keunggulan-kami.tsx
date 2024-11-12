import { Link } from "@remix-run/react";
import { Check } from "lucide-react";

export default function KeunggulanKami(): JSX.Element {
  const daily_tasks: string[] = [
    "Complete Daily Task",
    "Care of Time Management",
    "Healthy Food",
    "Daily Morning Walk",
    "Drinking Water",
    "Quality Time with Family",
    "Gym Workout",
    "Proper Sound Sleep",
  ];

  return (
    <section className="mx-auto mt-24 flex w-[90%] gap-x-14 items-center cursor-default">
      <div className="flex flex-col">
        <h6 className="text-lg font-semibold tracking-wide text-emerald-600">
          Keunggulan Kami
        </h6>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
          Memberikan Layanan Kesehatan Berkualitas dengan Standar Internasional
        </h1>
        <h5 className="mt-4 text-lg leading-relaxed text-gray-600">
          Kesehatan Anda adalah prioritas kami. Dengan dukungan tim medis
          profesional dan fasilitas modern, kami berkomitmen memberikan
          pelayanan kesehatan terbaik untuk setiap pasien.
        </h5>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {daily_tasks.map((task, i: number) =>
            <span key={i} className="flex items-center space-x-2 font-medium text-gray-700">
              <Check className="h-5 w-5 text-emerald-500" />
              <span className="text-base">{task}</span>
            </span>
          )}
        </div>
        <Link to={`/reservasi`} className="mt-6 flex w-fit rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-lg transition-all duration-500 lg:hover:scale-105">
          Konsultasi Sekarang
        </Link>
      </div>
      <img src="/keunggulan-kami.jpg" alt="Keunggulan Kami" className="hidden h-[30em] rounded-xl [box-shadow:_1rem_1rem_0.75rem_rgb(0_0_0_/_0.25)] lg:inline" />
    </section>
  );
}