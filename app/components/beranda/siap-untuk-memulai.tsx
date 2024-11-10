import { Link } from "@remix-run/react";
import { ArrowRight, Clock, Phone, MessageCircle } from "lucide-react";

export default function SiapUntukMemulai(): JSX.Element {
  return (
    <section className="relative mx-auto flex w-full cursor-default bg-gradient-to-t from-white to-gray-50 px-[5%] pt-28">
      <span className="absolute inset-0 mx-auto mt-28 w-[90%] -rotate-2 transform rounded-xl bg-emerald-600" />
      <div className="relative flex w-full flex-col items-center rounded-xl bg-emerald-500 px-8 py-16 text-white">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Siap untuk memulai?
        </h2>
        <h4 className="mt-4 text-center text-xl text-emerald-50 md:text-2xl">
          Daftar sekarang dan dapatkan konsultasi pertama Anda secara gratis!
        </h4>
        <span className="mt-10 flex flex-col gap-3 lg:flex-row lg:gap-8">
          <Link to={`/reservasi`} className="flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 transition-colors duration-200 lg:hover:bg-emerald-50">
            Mulai Konsultasi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to={`/layanan`} className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 lg:hover:bg-emerald-400">
            Pelajari Lebih Lanjut
          </Link>
        </span>
        <span className="mt-10 flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-8">
          <AddressItem icon={Phone} text="0800-123-4567" />
          <div className="hidden h-6 w-px bg-emerald-400 md:block"></div>
          <AddressItem icon={MessageCircle} text="info@healthcenter.com" />
          <div className="hidden h-6 w-px bg-emerald-400 md:block"></div>
          <AddressItem icon={Clock} text="Buka 24 Jam" />
        </span>
      </div>
    </section>
  );
}

function AddressItem({ icon: Icon, text }: { icon: typeof Phone, text: string }) {
  return (
    <address className="flex items-center gap-2">
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </address>
  );
}