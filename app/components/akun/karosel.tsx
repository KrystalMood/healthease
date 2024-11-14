import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import StepByStep from "~/data/akun";

export default function Karosel(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const image = useRef<HTMLImageElement | null>(null);

  const handleBulletClick = (index: number) => {
    gsap.to(image.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentStep(index);
        gsap.to(image.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  useEffect(() => {
    const pictures = setInterval(() => {
      gsap.to(image.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentStep(prevStep => (prevStep + 1) % StepByStep().length);
          gsap.to(image.current, { opacity: 1, duration: 0.5 });
        },
      });
    }, 3000);

    return () => clearInterval(pictures);
  }, []);

  return (
    <section className="relative hidden w-full overflow-hidden rounded-r-3xl lg:inline">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-green-900/90 via-transparent to-transparent" />
      <img
        ref={image}
        src={StepByStep()[currentStep].image}
        alt={StepByStep()[currentStep].title}
        className="absolute h-full object-cover transition-transform duration-700 [object-position:_50%_40%] hover:scale-105"
      />
      <figure className="relative z-10 mx-auto my-[10%] flex h-4/5 w-[90%] flex-col justify-end">
        <h2 className="mb-5 cursor-default text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {StepByStep()[currentStep].title}
        </h2>
        <figcaption className="mb-12 max-w-2xl cursor-default text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
          {StepByStep()[currentStep].description}
        </figcaption>
        <div className="flex space-x-2">
          {StepByStep().map((_, index: number) => (
            <button
              key={index}
              onClick={() => handleBulletClick(index)}
              className={`group relative rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50`}
            >
              <div className={`h-3 w-3 rounded-full transition-all duration-300 ${currentStep === index ? "scale-100 bg-white" : "scale-75 bg-gray-400/70 group-hover:scale-100"}`} />
            </button>
          ))}
        </div>
      </figure>
    </section>
  );
}