import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DataHero from "~/data/informasi-publik";

export default function InformasiHero() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const image = useRef<HTMLImageElement | null>(null);

  const handleBulletClick = (index: number) => {
    gsap.to(image.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentPage(index);
        gsap.to(image.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(image.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentPage((prevPage) => (prevPage + 1) % DataHero().length);
          gsap.to(image.current, { opacity: 1, duration: 0.5 });
        },
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[110vh] overflow-hidden">
      <img
        ref={image}
        src={DataHero()[currentPage].image}
        alt={DataHero()[currentPage].title}
        className="absolute h-[110vh] w-screen object-cover transition-transform duration-700 [object-position:_50%_40%] hover:scale-105"
      />
      <span className="absolute inset-0 bg-black opacity-40" />
      <span className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto h-[110vh] max-w-[90vw] px-4 sm:px-6 lg:px-0">
        <div className="flex h-full max-w-3xl flex-col justify-end pb-16">
          <h1 className="mb-6 cursor-default text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {DataHero()[currentPage].title}
          </h1>
          <p className="mb-12 max-w-2xl cursor-default text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
            {DataHero()[currentPage].description}
          </p>
          <figure className="flex space-x-2">
            {DataHero().map((_, index) => (
              <button
                key={index}
                onClick={() => handleBulletClick(index)}
                className={`group relative rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50`}
              >
                <div className={`h-3 w-3 rounded-full transition-all duration-300 ${currentPage === index ? "scale-100 bg-white" : "scale-75 bg-gray-400/70 group-hover:scale-100"}`} />
              </button>
            ))}
          </figure>
        </div>
      </div>
    </section>
  );
}