export default function Perkenalan(): JSX.Element {
  return (
    <section className="mx-auto mt-28 flex w-[90%] cursor-default flex-col gap-x-16 lg:flex-row">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
        Perkenankan <br className="hidden lg:inline" /> kami&nbsp;
        <br className="hidden lg:inline" /> memaparkan&nbsp;
        <br className="hidden lg:inline" />
        <span className="text-emerald-600">mekanisme kerjanya.</span>
      </h1>
      <h4 className="mt-4 text-xl font-light italic leading-relaxed text-gray-600 md:text-2xl lg:mt-0">
        Kami hadir untuk memandu Anda langkah demi langkah, dari awal hingga
        akhir. Dengan antarmuka yang sederhana dan interaksi yang alami, Anda
        bebas menjelajahi berbagai sumber daya yang kami siapkan khusus untuk
        Anda.
      </h4>
    </section>
  );
}