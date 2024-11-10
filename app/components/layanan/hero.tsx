import { Info } from "lucide-react";

export default function Hero(): JSX.Element {
  return (
    <section className="mx-auto flex items-center justify-between gap-x-12 bg-gradient-to-br from-slate-50 to-gray-50 px-[5%] py-28 lg:pt-40">
      <div className="flex flex-col text-center lg:text-left">
        <address className="mx-auto flex w-fit items-center rounded-xl bg-emerald-50 px-4 py-4 shadow-sm lg:mx-0">
          <span className="mr-2 hidden h-2 w-2 rounded-full bg-emerald-600 lg:inline" />
          <h4 className="cursor-default text-lg font-medium text-emerald-700">
            Informasi Mengenai Pelayanan yang Kami Sediakan
          </h4>
        </address>
        <h1 className="mt-10 cursor-default text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
          Solusi Kesehatan Terbaik, Tepat&nbsp;
          <span className="text-emerald-600">di Ujung Jari Anda</span>
        </h1>
        <h5 className="mt-4 max-w-xl cursor-default text-lg font-medium text-gray-600">
          Selamat datang di era perawatan kesehatan berbasis{" "}
          <span className="italic">Artificial Intelligence</span>. Kami
          menawarkan solusi cepat, akurat, dan personal dari diagnosis hingga
          pengobatan. Dengan teknologi canggih, konsultasi dan layanan kesehatan
          kini lebih mudah diakses.
        </h5>
        <hr className="mt-6 max-w-xl border-t-2 border-gray-200" />
        <button className="mx-auto mt-6 flex w-fit items-center justify-between rounded-lg border-2 border-emerald-600 bg-gradient-to-br from-slate-50 to-gray-50 px-6 py-2 text-lg font-medium text-gray-600 shadow-md transition-all duration-300 lg:mx-0 lg:hover:scale-105 lg:hover:bg-emerald-500 lg:hover:text-black">
          Pelajari Lebih Lanjut
          <Info className="ml-4 text-gray-600 opacity-90" size={18} />
        </button>
      </div>
      <div className="relative hidden lg:block">
        <span className="absolute -bottom-8 right-1/2 h-[60%] w-[120%] translate-x-1/2 rotate-3 rounded-lg bg-emerald-400 shadow-lg" />
        <img src="/hero-2.jpg" alt="Layanan Healthease" className="relative z-10 w-[50em] rounded-lg shadow-md transition-all duration-300 lg:hover:-rotate-3" />
      </div>
    </section>
  );
}