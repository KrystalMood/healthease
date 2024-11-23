export default function Hero() {
  return (
    <section className="relative bg-emerald-600 pt-32">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Reservasi Online
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-emerald-100">
            Buat janji temu dengan dokter pilihan Anda dengan mudah dan cepat
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <svg
          className="h-8 w-full text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 64"
        >
          <path
            fill="currentColor"
            d="M0,32L120,37.3C240,43,480,53,720,53.3C960,53,1200,43,1320,37.3L1440,32L1440,64L1320,64C1200,64,960,64,720,64C480,64,240,64,120,64L0,64Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 