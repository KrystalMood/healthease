export default function Hero(): JSX.Element {
  return (
    <section className="mx-auto w-full bg-gradient-to-tr from-slate-50 to-gray-50 pt-32">
      <div className="mx-auto w-[90%]">
        <h2 className="cursor-default text-4xl font-bold leading-tight tracking-tight text-gray-800 lg:text-6xl">
          Dedikasi Kami untuk
          <br />
          <span className="text-emerald-600">Kesehatan yang Lebih Baik</span>
          <br />
          Bersama Anda
        </h2>

        <p className="ml-16 mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Kami percaya bahwa setiap langkah menuju kesehatan yang lebih baik
          dimulai dengan kepercayaan dan komitmen. Mari mengenal lebih dekat
          visi dan misi kami dalam memberikan layanan kesehatan terbaik untuk
          Anda.
        </p>
      </div>

      <div className="relative mt-16">
        <span className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <img
          src="/hero-3.jpeg"
          alt="Tim HealthEase"
          className="h-[60vh] w-full object-cover"
        />
      </div>
    </section>
  );
}
