export default function BertemuSangPendiri() {
  return (
    <section className="mx-auto mb-16 mt-8 flex w-[90%] cursor-default flex-col gap-x-24 lg:flex-row">
      <div className="flex flex-col items-start justify-center lg:w-3/5">
        <h2 className="text-4xl font-bold italic text-emerald-600 lg:text-5xl">
          Bertemu Sang Pendiri
        </h2>
        <figure className="mt-7 flex">
          <span className="mr-6 hidden h-full w-1.5 bg-emerald-500 lg:inline" />
          <figcaption className="text-justify text-xl leading-relaxed text-gray-700">
            Inovasi di bidang kesehatan bukan hanya soal teknologi, tetapi soal
            kemanusiaan. HealthEase berdiri untuk melayani, karena kesehatan
            adalah inti dari kehidupan yang bermakna. Setiap orang, tanpa
            memandang latar belakang atau kondisi ekonomi, berhak mendapatkan
            akses kesehatan yang layak.
          </figcaption>
        </figure>
        <h4 className="mt-8 text-2xl font-semibold italic text-emerald-700">
          — Rafi Abiyyu Airlangga
        </h4>
      </div>
      <div className="relative mt-12 hidden lg:mt-0 lg:inline">
        <span className="absolute inset-0 -z-10 rotate-3 rounded-xl bg-emerald-400 shadow-lg" />
        <img
          src="/rafi-abiyyu-airlangga.jpeg"
          alt="Rafi Abiyyu Airlangga - Pendiri HealthEase"
          className="w-full rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}