import { Link } from "@remix-run/react";
import { HeroProps } from "~/data/beranda";

export default function Hero(): JSX.Element {
  return (
    <section className="mx-auto mt-28 flex w-[90%] gap-x-12 lg:mt-40">
      <div className="flex flex-col">
        <address className="mx-auto flex w-fit items-center rounded-xl bg-emerald-50 px-4 py-4 shadow-sm lg:mx-0">
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-600" />
          <h4 className="cursor-default text-lg font-medium text-emerald-700">
            Layanan Kesehatan Terpercaya
          </h4>
        </address>
        <h1 className="mt-10 cursor-default text-center text-4xl font-bold leading-tight text-gray-900 lg:text-left lg:text-5xl">
          Kesehatan Anda
          <br />
          <span className="text-emerald-600">Prioritas</span>
          &nbsp;Kami
        </h1>
        <h5 className="mt-4 cursor-default text-center text-lg leading-relaxed text-gray-600 lg:text-left">
          Kami menyediakan layanan kesehatan profesional dengan dokter
          berpengalaman, tersedia 24/7 untuk kebutuhan medis Anda. Konsultasi
          mudah, aman, dan terpercaya.
        </h5>
        <div className="mx-auto mt-8 flex flex-col gap-4 sm:mx-0 sm:flex-row">
          <Link to={`/reservasi`} className="rounded-lg bg-emerald-600 px-6 py-4 text-center font-medium text-white transition-all duration-500 ease-in-out lg:hover:scale-[1.05] lg:hover:bg-emerald-800">
            Buat Janji Temu
          </Link>
          <Link to={`/layanan`} className="rounded-lg border-2 border-emerald-600 bg-white px-6 py-4 font-medium text-emerald-700 transition-all duration-200 lg:hover:scale-105 lg:hover:bg-emerald-50">
            Lihat Layanan Kami
          </Link>
        </div>
        <div className="mx-auto mt-8 grid w-fit cursor-default grid-cols-3 gap-x-6 lg:mx-0">
          {HeroProps().map(hero =>
            <span key={hero.id} className="flex flex-col">
              <h4 className="text-3xl font-bold text-gray-900">{hero.data}</h4>
              <h5 className="text-sm text-gray-600">{hero.subject}</h5>
            </span>
          )}
        </div>
      </div>
      <img src="/hero.jpg" alt="Welcome to HealthEase!" className="hidden h-96 rounded-xl [box-shadow:_1rem_1rem_0.75rem_rgb(0_0_0_/_0.25)] lg:block" />
    </section>
  );
}