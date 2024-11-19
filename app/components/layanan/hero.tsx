import { Heart, Info, Stethoscope, Thermometer } from "lucide-react";

export default function Hero({ onLearnMore }: { onLearnMore: () => void }): JSX.Element {
  return (
    <section className="mx-auto flex min-h-[90vh] w-[90%] items-center justify-between gap-x-24 bg-white py-36 lg:py-28">
      <div className="flex flex-col text-center lg:text-left">
        <address className="mx-auto flex w-fit items-center gap-x-2 rounded-xl bg-emerald-50/80 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-emerald-50 lg:mx-0">
          <span className="mr-2 hidden h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-600 lg:inline" />
          <h4 className="cursor-default text-base font-semibold tracking-wide text-emerald-700">
            Informasi Mengenai Pelayanan yang Kami Sediakan
          </h4>
        </address>
        <h1 className="mt-12 cursor-default text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-6xl">
          Solusi Kesehatan Terbaik,&nbsp;
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Tepat&nbsp;
            <br className="hidden lg:inline" />
            di Ujung Jari Anda
          </span>
        </h1>
        <h5 className="mt-6 max-w-2xl cursor-default text-center text-lg font-medium leading-relaxed text-gray-600 lg:text-left">
          Selamat datang di era perawatan kesehatan berbasis{" "}
          <span className="italic">Artificial Intelligence</span>. Kami
          menawarkan solusi cepat, akurat, dan personal dari diagnosis hingga
          pengobatan. Dengan teknologi canggih, konsultasi dan layanan kesehatan
          kini lebih mudah diakses kapan saja dan di mana saja.
        </h5>
        <hr className="mx-auto mt-8 w-full max-w-xl border-t-2 border-gray-200/70 lg:mx-0" />
        <div className="mt-8 flex flex-col gap-y-4">
          <div className="flex items-center justify-center gap-x-12 lg:justify-start">
            <div className="flex flex-col items-center">
              <Stethoscope className="h-6 w-6 text-emerald-500 transition-all duration-300 hover:scale-110 hover:text-emerald-600" />
              <span className="mt-2 text-sm font-medium text-gray-600">
                50+ Dokter
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-6 w-6 text-emerald-500 transition-all duration-300 hover:scale-110 hover:text-emerald-600" />
              <span className="mt-2 text-sm font-medium text-gray-600">
                98% Puas
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Thermometer className="h-6 w-6 text-emerald-500 transition-all duration-300 hover:scale-110 hover:text-emerald-600" />
              <span className="mt-2 text-sm font-medium text-gray-600">
                24/7 Layanan
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-8 text-sm text-gray-500 lg:justify-start">
            <span className="flex items-center">
              <span className="mr-2 text-yellow-400">★★★★★</span>
              4.9/5 (2.5k+ review)
            </span>
            <span>|</span>
            <span>50k+ Pasien Terlayani</span>
          </div>
        </div>
        <button 
        onClick={onLearnMore}
        className="group mx-auto mt-8 flex w-fit items-center justify-between rounded-lg border-2 border-emerald-600 bg-gradient-to-br from-slate-50 to-gray-50 px-7 py-3 text-lg font-semibold text-gray-700 shadow-md transition-all duration-300 hover:scale-105 lg:mx-0">
          Pelajari Lebih Lanjut
          <Info
            className="ml-4 text-gray-700 transition-all group-hover:rotate-12"
            size={20}
          />
        </button>
      </div>
      <div className="relative hidden max-w-xl lg:block">
        <span className="absolute -bottom-10 right-1/2 h-[65%] w-[115%] translate-x-1/2 rotate-3 rounded-lg bg-gradient-to-br from-emerald-400/90 to-teal-400/90 shadow-lg backdrop-blur-sm" />
        <img
          src="/hero-2.jpg"
          alt="Layanan Healthease"
          className="relative z-10 w-full max-w-[52rem] rounded-lg shadow-xl transition-all duration-500 hover:-rotate-3 hover:scale-105"
        />
      </div>
    </section>
  );
}