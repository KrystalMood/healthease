import { Link } from "@remix-run/react";
import { HeroProps } from "~/data/beranda";

export default function Hero(): JSX.Element {
  return (
    <section className="mx-auto mt-28 flex w-[90%] xl:mt-40 xl:gap-x-12">
      <div className="flex flex-col">
        <address className="mx-auto flex w-fit items-center rounded-xl bg-emerald-50 px-4 py-4 shadow-sm xl:mx-0">
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-600" />
          <h4 className="cursor-default text-lg font-medium text-emerald-700">
            Layanan Kesehatan Terpercaya
          </h4>
        </address>
        <h1 className="mt-10 cursor-default text-center text-4xl font-bold leading-tight text-gray-900 xl:text-left xl:text-5xl">
          Kesehatan Anda
          <br />
          <span className="text-emerald-600">Prioritas</span>
          &nbsp;Kami
        </h1>
        <h5 className="mt-4 cursor-default text-center text-lg leading-relaxed text-gray-600 xl:text-left">
          Kami menyediakan layanan kesehatan profesional dengan dokter
          berpengalaman, tersedia 24/7 untuk kebutuhan medis Anda. Konsultasi
          mudah, aman, dan terpercaya.
        </h5>
        <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-4 sm:mx-0 sm:flex-row xl:justify-start">
          <Link to={`/reservasi`} className="rounded-lg bg-emerald-600 px-6 py-4 text-center font-medium text-white transition-all duration-500 ease-in-out xl:hover:scale-[1.05] xl:hover:bg-emerald-800">
            Buat Janji Temu
          </Link>
          <Link to={`/layanan`} className="rounded-lg border-2 border-emerald-600 bg-white px-6 py-4 font-medium text-emerald-700 transition-all duration-200 xl:hover:scale-105 xl:hover:bg-emerald-50">
            Lihat Layanan Kami
          </Link>
        </div>
        <div className="mx-auto mt-8 grid w-fit cursor-default grid-cols-3 gap-x-6 xl:mx-0">
          {HeroProps().map((hero) => (
            <span key={hero.id} className="flex flex-col">
              <h4 className="text-3xl font-bold text-gray-900">{hero.data}</h4>
              <h5 className="text-sm text-gray-600">{hero.subject}</h5>
            </span>
          ))}
        </div>
      </div>
      <div className="relative transition-transform duration-300 xl:hover:rotate-1 xl:hover:scale-[1.02]">
        <span className="absolute inset-0 z-20 h-full w-full rounded-2xl bg-gradient-to-t from-emerald-500 to-transparent opacity-50 transition-opacity duration-300 xl:hover:opacity-40" />
        <span className="absolute left-3 top-3 h-full w-full rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 opacity-50 transition-opacity duration-300 xl:hover:opacity-40" />
        <img
          src="/hero.jpg"
          alt="Welcome to HealthEase!"
          className="relative z-10 hidden h-auto max-w-xl rounded-2xl object-cover shadow-[1rem_1rem_3rem_rgba(0,0,0,0.1)] transition-all duration-300 xl:block xl:hover:shadow-[1.2rem_1.2rem_3.5rem_rgba(0,0,0,0.15)]"
        />
      </div>
    </section>
  );
}