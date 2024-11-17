import { CircleHelp } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto flex gap-x-7 px-[5%] pt-28">
      <div className="flex flex-col items-start justify-center">
        <span className="flex rounded-lg bg-emerald-50 px-4 py-2 text-emerald-600">
          <CircleHelp />
          &ensp;
          <h4 className="font-semibold">Pusat Bantuan</h4>
        </span>
        <h2 className="mt-4 text-4xl font-bold">
          Bantu Kami Menjadi Lebih Baik
        </h2>
        <h5 className="mt-4">
          Kritik dan saran Anda adalah bagian penting dari upaya kami untuk
          terus berinovasi dan berkembang. Bagikan pandangan Anda agar kami
          dapat memperbaiki dan meningkatkan kualitas program dan layanan yang
          kami tawarkan.
        </h5>
      </div>
      <div className="relative transition-transform duration-300 xl:hover:rotate-1 xl:hover:scale-[1.02]">
        <span className="absolute inset-0 z-20 h-full w-full rounded-2xl bg-gradient-to-t from-emerald-500 to-transparent opacity-50 transition-opacity duration-300 xl:hover:opacity-40" />
        <span className="absolute left-3 top-3 h-full w-full rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 opacity-50 transition-opacity duration-300 xl:hover:opacity-40" />
        <img
          src="/pusat-bantuan.jpg"
          alt="Welcome to HealthEase!"
          className="relative z-10 hidden h-auto max-w-xl rounded-2xl object-cover shadow-[1rem_1rem_3rem_rgba(0,0,0,0.1)] transition-all duration-300 xl:block xl:hover:shadow-[1.2rem_1.2rem_3.5rem_rgba(0,0,0,0.15)]"
        />
      </div>
    </section>
  );
}