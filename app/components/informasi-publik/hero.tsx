import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export interface Informasi {
  heading: string;
  subtitle: string;
  image: string;
}

export const informasiList: Informasi[] = [
  {
    heading: "Pusat Kesehatan Masyarakat",
    subtitle:
      "Layanan kesehatan dasar dan preventif di setiap wilayah untuk mendukung kesehatan masyarakat.",
    image: "informasi-publik/temp1.jpeg",
  },
  {
    heading: "Rumah Sakit Rujukan",
    subtitle:
      "Pusat layanan kesehatan yang lebih kompleks untuk penanganan kondisi serius.",
    image: "informasi-publik/temp2.jpeg",
  },
  {
    heading: "Layanan Darurat",
    subtitle: "Layanan 24 jam untuk penanganan darurat medis.",
    image: "informasi-publik/temp3.jpeg",
  },
];

export default function InformasiHero() {
  const [currentPage, setCurrentPage] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleBulletClick = (index: number) => {
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentPage(index);
        gsap.to(imageRef.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentPage((prevPage) => (prevPage + 1) % informasiList.length);
          gsap.to(imageRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        ref={imageRef}
        src={informasiList[currentPage].image}
        alt=""
        className="absolute h-screen w-screen object-cover transition-transform duration-700 hover:scale-105"
        style={{ objectPosition: "50% 40%" }}
      />

      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-transparent to-transparent" />

      <div className="relative h-screen z-10">
        <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-0 h-full">
          <div className="flex flex-col justify-end h-full pb-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                {informasiList[currentPage].heading}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-12 max-w-2xl">
                {informasiList[currentPage].subtitle}
              </p>

              <div className="flex space-x-2">
                {informasiList.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleBulletClick(index)}
                    className={`group relative p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full transition-all duration-300`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full transition-all duration-300 
                        ${
                          currentPage === index
                            ? "bg-white scale-100"
                            : "bg-gray-400/70 scale-75 group-hover:scale-100"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
