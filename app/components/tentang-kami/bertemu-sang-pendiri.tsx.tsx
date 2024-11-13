export default function BertemuSangPendiri() {
  return (
    <section className="mx-auto my-10 flex w-[90%] cursor-default flex-col gap-x-20 lg:my-20 lg:flex-row">
      <div className="flex flex-col items-start justify-center lg:w-3/5">
        <h2 className="text-3xl font-semibold italic lg:text-4xl">
          Meet The Founder
        </h2>
        <figure className="mt-8 flex">
          <span className="mr-4 hidden h-full w-1 bg-black lg:inline" />
          <figcaption className="text-justify text-lg leading-relaxed first-letter:float-left">
            ❝Inovasi di bidang kesehatan bukan hanya soal teknologi, tetapi soal
            kemanusiaan. HealthEase berdiri untuk melayani, karena kesehatan
            adalah inti dari kehidupan yang bermakna. Setiap orang, tanpa
            memandang latar belakang atau kondisi ekonomi, berhak mendapatkan
            akses kesehatan yang layak.❞
          </figcaption>
        </figure>
        <h4 className="mt-4 text-lg font-semibold italic">
          — Rafi Abiyyu Airlangga
        </h4>
      </div>
      <div className="relative hidden lg:inline">
        <span className="absolute inset-0 -z-10 rotate-3 rounded-xl bg-green-400" />
        <img
          src="/rafi-abiyyu-airlangga.jpeg"
          alt="Meet The Founder."
          className="w-full rounded-xl"
        />
      </div>
    </section>
  );
}