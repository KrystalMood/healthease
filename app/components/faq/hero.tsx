export default function Hero(): JSX.Element {
  return (
    <section className="relative mt-16 flex w-full cursor-default flex-col items-center justify-center bg-[url('/hero-4.jpg')] bg-cover bg-center bg-no-repeat py-40 text-white">
      <span className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-green-600 opacity-75" />
      <div className="relative z-10 w-[90%] text-center lg:w-3/5">
        <h4 className="text-xl font-semibold tracking-wider">
          Pertanyaan yang Sering Diajukan
        </h4>
        <h2 className="mt-5 text-5xl font-bold">
          Hai, apa yang dapat kami bantu?
        </h2>
        <h5 className="mt-4 text-lg">
          Cukup ajukan pertanyaan Anda di bawah untuk mendapatkan jawabannya.
        </h5>
        <span className="relative mx-auto mt-8 flex items-center justify-center text-black">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full rounded-md py-4 pl-[1.25em] pr-[6.25em] !outline-none lg:pr-44"
            placeholder="Ajukan pertanyaan..."
          />
          <label htmlFor="search" className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-md bg-emerald-400 px-6 py-[0.675em] font-semibold text-white focus:!outline-none">
            Cari <h4 className="hidden lg:inline">Sekarang</h4>
          </label>
        </span>
      </div>
    </section>
  );
}