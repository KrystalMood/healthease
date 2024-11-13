export default function Hero(): JSX.Element {
  return (
    <section className="mx-auto w-full bg-gradient-to-tr from-slate-50 to-gray-50 pt-32">
      <h2 className="cursor-default px-[5%] text-4xl font-bold leading-tight tracking-tight text-gray-800 lg:text-5xl">
        Dedikasi Kami untuk Kesehatan yang
        <br />
        Lebih Baik Bersama Anda
      </h2>
      <div className="relative">
        <span className="absolute inset-0 bg-black opacity-40" />
        <img src="/hero-3.jpeg" alt="Hero" className="mt-16 w-full" />
      </div>
    </section>
  );
}