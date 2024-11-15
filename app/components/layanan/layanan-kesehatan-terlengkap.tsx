export default function LayananKesehatanTerlengkap(): JSX.Element {
  return (
    <section className="mx-auto my-24 w-[90%]">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:w-1/2 lg:text-left">
          Layanan Kesehatan Terlengkap
          <span className="block text-emerald-600">untuk Kebutuhan Anda</span>
        </h2>
        <div className="lg:w-1/2">
          <p className="text-lg leading-relaxed text-gray-600">
            Kami memahami bahwa setiap orang memiliki kebutuhan kesehatan yang
            unik. Oleh karena itu, kami menyediakan berbagai layanan kesehatan
            berbasis teknologi untuk membantu Anda mendapatkan perawatan
            terbaik, di mana pun Anda berada.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Dari konsultasi dokter hingga pemantauan kesehatan secara real-time,
            layanan kami dirancang untuk memberikan solusi yang cepat, akurat,
            dan nyaman.
          </p>
          <p className="mt-4 text-lg font-semibold text-emerald-600">
            Mari jelajahi berbagai layanan yang kami tawarkan dan temukan yang
            paling sesuai untuk Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
