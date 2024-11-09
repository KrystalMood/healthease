export default function MulaiPerjalanan(): JSX.Element {
  return (
    <section className="mx-auto mt-10 flex w-full cursor-default flex-col gap-x-16 bg-gradient-to-b from-white to-gray-50 px-[5%] text-justify lg:flex-row lg:text-left">
      <h1 className="w-full text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
        Mulai perjalanan
        <br className="hidden lg:inline" />
        &nbsp;
        <span className="text-emerald-600">kesehatan Anda</span>
        &nbsp;hari ini.
      </h1>
      <h4 className="mt-4 text-xl font-light italic leading-relaxed text-gray-600 md:text-2xl lg:mt-0">
        Kesehatan Anda adalah prioritas kami. Dengan teknologi modern dan tim
        dokter berpengalaman, kami siap memberikan pelayanan kesehatan terbaik
        untuk Anda dan keluarga.
      </h4>
    </section>
  );
}