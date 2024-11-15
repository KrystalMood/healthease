import { Link } from "@remix-run/react";
import { Check, ChevronRight } from "lucide-react";

export default function KeunggulanKami(): JSX.Element {
  const keunggulanKami: string[] = [
    "Pelayanan 24/7",
    "Tim Medis Berpengalaman",
    "Fasilitas Modern",
    "Perawatan Holistik",
    "Teknologi Terkini",
    "Pendekatan Personal",
    "Lingkungan Nyaman",
    "Standar Internasional",
  ];

  return (
    <section className="mx-auto mt-10 flex w-[90%] cursor-default items-center gap-x-14 py-16">
      <div className="flex flex-col">
        <h6 className="animate-pulse text-lg font-semibold tracking-wide text-emerald-600">
          Keunggulan Kami
        </h6>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
          Memberikan&nbsp;
          <span className="animate-gradient bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Layanan Kesehatan Berkualitas
          </span>&nbsp;
          dengan Standar Internasional
        </h1>
        <h5 className="mt-4 text-lg leading-relaxed text-gray-600">
          Kesehatan Anda adalah prioritas utama kami. Dengan dukungan tim medis
          profesional dan fasilitas modern, kami berkomitmen memberikan
          pelayanan kesehatan terbaik untuk setiap pasien.
        </h5>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {keunggulanKami.map((keunggulan, i: number) => (
            <span key={i} className="flex items-center space-x-2 rounded-lg bg-white p-2 font-medium text-gray-700 transition-all duration-300 hover:scale-[1.05] hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-lg">
              <Check className="h-5 w-5 text-emerald-500" />
              <h5 className="text-base">{keunggulan}</h5>
            </span>
          ))}
        </div>
        <Link to={`/reservasi`} className="mt-8 flex w-fit items-center gap-4 rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-lg transition-all duration-500 hover:from-emerald-700 hover:to-green-600 hover:shadow-xl lg:hover:scale-105">
          Konsultasi Sekarang <ChevronRight />
        </Link>
      </div>
      <div className="group relative transition-all duration-300">
        <span className="absolute inset-0 z-20 h-full w-full rounded-xl bg-gradient-to-t from-emerald-600 to-transparent opacity-50 transition-all duration-300 group-hover:rotate-2"></span>
        <span className="absolute left-3 top-3 h-full w-full rounded-xl bg-gradient-to-t from-emerald-600 to-green-600 opacity-50 transition-all duration-300 group-hover:rotate-2"></span>
        <img
          src="/keunggulan-kami.jpg"
          alt="Keunggulan Kami"
          className="relative z-10 hidden h-[30rem] w-[50rem] rounded-xl object-cover transition-all duration-300 [box-shadow:_1rem_1rem_1rem_rgb(0_0_0_/_0.3)] group-hover:rotate-2 lg:inline"
        />
      </div>
    </section>
  );
}