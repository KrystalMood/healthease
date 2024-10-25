import { Contact, Home, HomeIcon, User } from "lucide-react";

export default function LayananOutro() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-emerald-50 to-white bg-black">
      <div className="relative h-full flex items-center justify-between max-w-7xl mx-auto px-8 py-16 space-y-12">
        {/* <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl m-4" /> */}

        <div className="max-w-2xl">
          <div className="relative space-y-12 p-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight">
                Temukan Kemudahan dengan{" "}
                <span className="text-emerald-600 inline-block">
                  HealthEase
                </span>
              </h1>

              <div className="h-1 w-32 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-8">
              <p className="max-w-2xl mx-auto font-light text-2xl leading-relaxed text-gray-600">
                Nikmati pengalaman kesehatan yang lebih{" "}
                <span className="font-medium text-emerald-700">terhubung</span>{" "}
                dan{" "}
                <span className="font-medium text-emerald-700">
                  terorganisir
                </span>{" "}
                dengan HealthEase. Dari fitur pengelolaan data pasien hingga
                layanan telemedicine, kami telah menghadirkan solusi yang
                dirancang untuk memenuhi kebutuhan kesehatan modern Anda.
              </p>

              <p className="max-w-2xl mx-auto font-light text-2xl leading-relaxed text-gray-600">
                Eksplorasi fitur yang ada hanya permulaan—dengan HealthEase,
                Anda mendapatkan{" "}
                <span className="font-medium text-emerald-700">
                  kontrol penuh
                </span>{" "}
                atas kesehatan Anda, kapan saja dan di mana saja.
              </p>
            </div>

            <div className="flex items-center justify-start space-x-4 pt-4">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                Daftar Sekarang
              </button>
              <button className="p-4 border-2 border-emerald-600 hover:border-emerald-700 rounded-xl shadow-lg text-emerald-600 hover:text-emerald-700 transition-all duration-300 hover:scale-105">
                <HomeIcon size={28} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="templateAnime.jpg"
            alt=""
            className="rounded-lg shadow-md z-10 relative"
          />
          <div className="absolute h-[130%] w-[70%] bg-green-400 top-1/2 -right-5 -translate-y-1/2 rounded-lg shadow-lg"></div>
          <div className="absolute bg-gradient-to-br opacity-50 from-green-400 via-transparent to-transparent inset-0 rounded-lg shadow-lg z-10"></div>
        </div>
      </div>
    </div>
  );
}
