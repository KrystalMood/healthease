import { Link } from "@remix-run/react";
import { Check, ChevronRight } from "lucide-react";

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
    <section className="mx-auto mt-24 flex w-[90%] cursor-default items-center gap-x-14">
      <div className="flex flex-col">
        <h6 className="text-lg font-semibold tracking-wide text-emerald-600">
          Keunggulan Kami
        </h6>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
          Memberikan{" "}
          <span className="text-emerald-600">
            Layanan Kesehatan Berkualitas
          </span>{" "}
          dengan Standar Internasional
        </h1>
        <h5 className="mt-4 text-lg leading-relaxed text-gray-600">
          Kesehatan Anda adalah prioritas kami. Dengan dukungan tim medis
          profesional dan fasilitas modern, kami berkomitmen memberikan
          pelayanan kesehatan terbaik untuk setiap pasien.
        </h5>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {daily_tasks.map((task, i: number) => (
            <span
              key={i}
              className="flex items-center space-x-2 font-medium text-gray-700 transition-all duration-200 hover:scale-[1.02] hover:text-emerald-600"
            >
              <Check className="h-5 w-5 text-emerald-500" />
              <span className="text-base">{task}</span>
            </span>
          ))}
        </div>
        <Link
          to={`/reservasi`}
          className="mt-6 flex w-fit items-center gap-4 rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-lg transition-all duration-500 lg:hover:scale-105"
        >
          Konsultasi Sekarang <ChevronRight />
        </Link>
      </div>

      <div className="group relative transition-all duration-200">
        <span className="absolute inset-0 z-20 h-full w-full rounded-xl bg-gradient-to-t from-emerald-600 to-transparent opacity-50 transition-all duration-200 group-hover:rotate-1"></span>
        <span className="absolute left-3 top-3 h-full w-full rounded-xl bg-gradient-to-t from-emerald-600 to-green-600 opacity-50 transition-all duration-200 group-hover:rotate-1"></span>
        <img
          src="/keunggulan-kami.jpg"
          alt="Keunggulan Kami"
          className="relative z-10 hidden h-[30rem] w-[50rem] rounded-xl object-cover transition-all duration-200 [box-shadow:_1rem_1rem_0.75rem_rgb(0_0_0_/_0.25)] group-hover:rotate-1 lg:inline"
        />
      </div>
    </section>
  );
}
