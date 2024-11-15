import { Link } from "@remix-run/react";
import { HeroProps } from "~/data/beranda";

export default function Hero(): JSX.Element {
  return (
    <section className="mx-auto mt-20 flex w-[95%] max-w-[90%] flex-col gap-y-8 lg:mt-32 lg:flex-row lg:gap-x-16">
      <div className="flex flex-1 flex-col">
        <address className="mx-auto flex w-fit items-center rounded-xl bg-emerald-50/80 px-5 py-3 shadow-md lg:mx-0">
          <span className="mr-3 h-2.5 w-2.5 rounded-full bg-emerald-600" />
          <h4 className="cursor-default text-base font-semibold tracking-wide text-emerald-700 lg:text-lg">
            Layanan Kesehatan Terpercaya
          </h4>
        </address>

        <h1 className="mt-8 cursor-default text-center text-4xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-left lg:text-6xl">
          Kesehatan Anda
          <br />
          <span className="text-emerald-600">Prioritas</span>
          &nbsp;Kami
        </h1>

        <h5 className="mt-6 cursor-default text-center text-base leading-relaxed text-gray-600 lg:max-w-2xl lg:text-left lg:text-lg">
          Kami menyediakan layanan kesehatan profesional dengan dokter
          berpengalaman, tersedia 24/7 untuk kebutuhan medis Anda. Konsultasi
          mudah, aman, dan terpercaya.
        </h5>

        <div className="mx-auto mt-10 flex flex-col gap-4 sm:mx-0 sm:flex-row">
          <Link
            to={`/reservasi`}
            className="rounded-xl bg-emerald-600 px-8 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] lg:hover:bg-emerald-700"
          >
            Buat Janji Temu
          </Link>
          <Link
            to={`/layanan`}
            className="rounded-xl border-2 border-emerald-600 bg-white px-8 py-4 text-center font-semibold text-emerald-700 transition-all duration-300 hover:translate-y-[-2px] hover:bg-emerald-50"
          >
            Lihat Layanan Kami
          </Link>
        </div>

        <div className="mx-auto mt-12 grid w-fit cursor-default grid-cols-3 gap-x-10 border-t border-gray-200 pt-8 lg:mx-0">
          {HeroProps().map((hero) => (
            <span
              key={hero.id}
              className="flex flex-col items-center lg:items-start"
            >
              <h4 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                {hero.data}
              </h4>
              <h5 className="mt-1 text-sm font-medium text-gray-500">
                {hero.subject}
              </h5>
            </span>
          ))}
        </div>
      </div>

      <div className="relative transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]">
        <span className="absolute inset-0 z-20 h-full w-full rounded-2xl bg-gradient-to-t from-emerald-500 to-transparent opacity-50 transition-opacity duration-300 hover:opacity-40" />
        <span className="absolute left-3 top-3 h-full w-full rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 opacity-50 transition-opacity duration-300 hover:opacity-40" />
        <img
          src="/hero.jpg"
          alt="Welcome to HealthEase!"
          className="relative z-10 hidden h-auto max-w-xl rounded-2xl object-cover shadow-[1rem_1rem_3rem_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[1.2rem_1.2rem_3.5rem_rgba(0,0,0,0.15)] lg:block"
        />
      </div>
    </section>
  );
}
