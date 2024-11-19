import { useState } from "react";
import DataFitur from "~/data/layanan";
import DaftarFitur from "./daftar-fitur";
import HeaderFitur from "./header-fitur";
import { forwardRef } from "react";

const Fitur = forwardRef<HTMLElement>((_, ref) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="mx-auto mb-20 flex w-[90%] gap-x-12">
      <div className="relative hidden lg:flex">
        <span className="absolute inset-0 -z-10 rotate-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500" />
        <img
          src={activeIndex == null ? "/fitur.webp" : DataFitur()[activeIndex].image}
          alt="Fitur Unggulan HealthEase"
          className="h-full max-w-80 rounded-xl object-cover shadow-lg transition-all duration-300 hover:-rotate-3 hover:scale-105"
        />
      </div>
      <div className="relative flex w-fit flex-col rounded-lg border-2 border-emerald-100 bg-white px-12 py-8 shadow-xl">
        <HeaderFitur />
        <DaftarFitur
          features={DataFitur()}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
});

Fitur.displayName = "Fitur";
export default Fitur;

