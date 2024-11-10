export default function Perkenalan(): JSX.Element {
  return (
    <section className="mx-auto mt-20 flex w-full cursor-default flex-col px-[5%] lg:flex-row">
      <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:w-1/2 xl:text-6xl">
        Perkenankan kami&nbsp; memaparkan&nbsp;
        <br />
        <span className="text-emerald-600">
          mekanisme
          <br className="hidden lg:inline" />
          kerjanya.
        </span>
      </h2>
      <h4 className="mt-4 text-lg font-light italic leading-relaxed text-gray-600 md:text-xl lg:w-1/2 xl:mt-0">
        Kami hadir untuk memandu Anda langkah demi langkah, dari awal hingga
        akhir. Dengan antarmuka yang sederhana dan interaksi yang alami, Anda
        bebas menjelajahi berbagai sumber daya yang kami siapkan khusus untuk
        Anda.
      </h4>
    </section>
  );
}