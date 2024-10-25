import { Dot, HeartPulse, Info, MonitorCheck, Stethoscope } from "lucide-react";

const logo: JSX.Element[] = [<HeartPulse />, <Stethoscope />, <MonitorCheck />];
export default function LayananHero() {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-gray-50 px-4 md:px-6">
      <div className=" flex justify-center max-w-7xl mx-auto items-center lg:justify-between h-full text-black ">
        <div className="flex flex-col space-y-8">
          <h5 className="text-lg font-medium bg-emerald-100 text-emerald-500 w-fit px-4 py-2 rounded-lg flex  items-center">
            <Dot size={40} />
            Informasi mengenai pelayanan yang kami sediakan
          </h5>
          <h1 className="font-bold text-5xl max-w-xl">
            Solusi Kesehatan Terbaik, Tepat{" "}
            <span className="text-emerald-600">di Ujung Jari Anda</span>
          </h1>
          <p className="max-w-xl text-lg font-medium text-gray-600">
            Selamat datang di era perawatan kesehatan berbasis{" "}
            <span className="italic">Artificial Intelligence</span>. Kami
            menawarkan solusi cepat, akurat, dan personal dari diagnosis hingga
            pengobatan. Dengan teknologi canggih, konsultasi dan layanan
            kesehatan kini lebih mudah diakses.
          </p>
          <hr className="border-t-2 border-gray-200" />
          <div className="flex space-x-6">
            {logo.map((icon) => (
              <div className="opacity-50 hover:scale-125 transition-all duration-300">
                {icon}
              </div>
            ))}
          </div>
          <button className="flex items-center justify-between text-lg px-6 py-2 w-full lg:w-fit text-gray-600 shadow-md border-2 border-emerald-600 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 font-medium hover:bg-emerald-500 hover:text-black hover:scale-105 transition-all duration-300">
            Pelajar lebih lanjut{" "}
            <Info className="text-gray-600 opacity-90 ml-4" size={18} />
          </button>
        </div>
        <div className="relative hidden lg:block">
          <img
            src="templateAnime.jpg"
            alt="Layanan HealthEase"
            className="rounded-lg shadow-md z-10 relative hover:-rotate-3 transition-all duration-300"
          />
          {/* <div className="absolute top-0 rotate-[2deg] w-full h-full bg-emerald-300 rounded-lg shadow-md"></div>
          <div className="absolute top-0 rotate-[4deg] w-full h-full bg-emerald-200 rounded-lg shadow-md"></div> */}
          <div className="absolute -bottom-8 right-1/2 rotate-3 translate-x-1/2 w-[120%] h-[60%] bg-emerald-400 rounded-lg shadow-lg"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t opacity-50 from-emerald-600 via-transparent to-transparent w-full h-full rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
