export default function Hero(): JSX.Element {
  return (
    <section className="relative mt-16 flex w-full cursor-default flex-col items-center justify-center bg-[url('/hero-4.jpg')] bg-cover bg-center bg-no-repeat py-40 text-white">
      <span className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-green-600 opacity-75" />
      <div className="relative z-10 w-[90%] text-center lg:w-3/5">
        <h4 className="text-xl font-semibold tracking-wider uppercase">
          Pertanyaan yang Sering Diajukan
        </h4>
        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Hai, Apa yang Dapat Kami Bantu?
        </h2>
        <h5 className="mt-4 text-lg font-light">
          Cukup ajukan pertanyaan Anda di bawah untuk mendapatkan jawabannya dengan cepat.
        </h5>
        <div className="relative mx-auto mt-8 flex items-center justify-center text-black w-full max-w-2xl">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full rounded-full py-4 pl-6 pr-32 shadow-lg focus:ring-2 focus:ring-emerald-300 transition duration-300 ease-in-out"
            placeholder="Ajukan pertanyaan Anda..."
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-emerald-500 px-6 py-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300">
            Cari <span className="hidden lg:inline">Sekarang</span>
          </button>
        </div>
      </div>
    </section>
  );
}