import FeatureCard from "./feature-card";
import { Features } from "~/data/pusat-bantuan";

export default function Hero(): JSX.Element {
  return (
    <div className="relative">
      <span className="absolute -top-44 z-10 h-[30rem] w-full bg-gradient-to-t from-emerald-700 via-transparent to-transparent"></span>
      <span className="absolute -top-44 h-[30rem] w-full">
        <img
          src="/mengapa-kami.jpg"
          alt="Mengapa Kami"
          className="h-full w-full object-cover"
        />
      </span>

      <section className="relative z-20 mx-auto mb-12 mt-32 w-[95%] sm:mb-16 sm:mt-40 sm:w-[90%] md:mb-20 md:mt-48 lg:mb-24 lg:mt-52">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-emerald-100/50 blur-3xl sm:h-56 sm:w-56 md:h-64 md:w-64" />
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-green-100/50 blur-3xl sm:h-56 sm:w-56 md:h-64 md:w-64" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl lg:leading-tight">
            Mengapa Memilih{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Pusat Bantuan Kami
            </span>
            ?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-base leading-relaxed text-white/90 sm:mt-4 sm:px-0 sm:text-lg">
            Kami berkomitmen untuk memberikan pengalaman terbaik dalam membantu
            menyelesaikan setiap kebutuhan Anda
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {Features().map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-16 flex flex-col flex-wrap items-center justify-center gap-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 px-6 py-10 text-white sm:mt-20 sm:flex-row sm:gap-x-16 sm:gap-y-8 sm:px-8 sm:py-12">
          <div className="text-center">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">5k+</p>
            <p className="mt-1 text-sm leading-normal text-emerald-100/90 sm:text-base">
              Masalah Terselesaikan
            </p>
          </div>
          <div className="hidden h-16 w-px bg-emerald-400 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">4.9/5</p>
            <p className="mt-1 text-sm leading-normal text-emerald-100/90 sm:text-base">
              Rating Kepuasan
            </p>
          </div>
          <div className="hidden h-16 w-px bg-emerald-400 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">&lt;5 min</p>
            <p className="mt-1 text-sm leading-normal text-emerald-100/90 sm:text-base">
              Waktu Respon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
