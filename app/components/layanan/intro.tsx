import { ChevronRight } from "lucide-react";

const listLayanan = [
  "Fitur AI",
  "Penjadwalan Otomatis",
  "Manajemen Data Pasien",
  "Portal Kesehatan",
  "Telemedicine",
  "Pengingat Obat",
];
export default function LayananIntro() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        <h1 className="text-6xl font-bold py-16">
          Layanan Kesehatan Terlengkap untuk Kebutuhan Anda
        </h1>
        <p className="max-w-xl text-lg text-gray-600 italic">
          Kami memahami bahwa setiap orang memiliki kebutuhan kesehatan yang
          unik. Oleh karena itu, kami menyediakan berbagai layanan kesehatan
          berbasis teknologi untuk membantu Anda mendapatkan perawatan terbaik,
          di mana pun Anda berada. Dari konsultasi dokter hingga pemantauan
          kesehatan secara real-time, layanan kami dirancang untuk memberikan
          solusi yang cepat, akurat, dan nyaman. Mari jelajahi berbagai layanan
          yang kami tawarkan dan temukan yang paling sesuai untuk Anda.
        </p>
      </div>
      <div className="flex justify-center items-center max-[90vw] mx-auto">
        <div className="relative w-fit">
          <img
            src="templateAnime.jpg"
            alt=""
            className="z-10 relative rounded-md shadow-md object-cover hover:-rotate-3 transition-all duration-300"
          />
          <div className="absolute inset-0 rotate-3 bg-green-400 rounded-md"></div>
          <div className="absolute inset-0 bg-gradient-to-l opacity-50 from-green-400 via-transparent to-transparent rounded-md z-10"></div>
        </div>

        <div className="relative ml-24 shadow-lg px-12 py-8 rounded-xl border-2 border-gray-100 flex flex-col">
          <h2 className=" text-5xl font-bold">Fitur yang kami tawarkan</h2>
          <p className=" py-6 max-w-xl">
            Temukan keunggulan{" "}
            <span className="text-emerald-600">HealthEase</span>, dengan
            fitur-fitur modern yang siap mendukung kebutuhan kesehatan Anda.
            Dari teknologi AI hingga kemudahan akses layanan kesehatan, kami
            hadir untuk memberikan pengalaman terbaik dalam merawat kesehatan
            Anda. Mari jelajahi dan nikmati kemudahan yang kami tawarkan.
          </p>
          <div className="space-y-7 text-xl z-10">
            {listLayanan.map((list, index) => (
              <>
                <button
                  key={list}
                  className="flex items-center justify-between w-full hover:translate-x-4 transition-all duration-300"
                >
                  <div className="flex">
                    <div className="relative">
                      <h2 className="relative z-10 font-bold">{index + 1}.</h2>
                      <div className="absolute -left-3 -top-6 translate-y-1/2 opacity-60 bg-green-200 rounded-full w-10 h-10 shadow-md"></div>
                    </div>
                    <h2 className="ml-6 font-semibold">{list}</h2>
                  </div>
                  <ChevronRight />
                </button>
                <hr className="border-t-2 border-emerald-50" />
              </>
            ))}
          </div>
          <div className="absolute w-[100%] h-[100%] -top-4 -left-8 rounded-md bg-black -z-10"></div>
        </div>
      </div>
    </div>
  );
}
