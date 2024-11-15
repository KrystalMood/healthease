import { ChevronDown, ChevronRightIcon } from "lucide-react";
import { AlasanMemilihProps } from "~/data/beranda";

export default function AlasanMemilihKami(): JSX.Element {
  return (
    <section className="mx-auto mt-20 flex max-w-full cursor-default items-center justify-between gap-x-20 bg-gradient-to-br from-emerald-950 to-emerald-900 px-[7.5%] lg:mt-28">
      <div className="hidden h-full w-[100em] lg:block">
        <img
          src="/alasan-memilih-kami.jpg"
          alt="Alasan Mengapa Anda Harus Memilih Kami"
          className="h-[65em] object-cover"
        />
      </div>
      <div className="flex flex-col py-14 lg:py-28">
        <h1 className="text-4xl font-light leading-tight tracking-tight text-gray-50 lg:text-6xl">
          We care for your health,&nbsp;
          <span className="mt-2 block font-medium">we heal with heart</span>
        </h1>
        <h4 className="mt-8 text-lg leading-relaxed tracking-wide text-gray-300">
          <span className="font-medium text-emerald-200">HealthEase</span>
          &nbsp;adalah pusat layanan kesehatan modern yang berkomitmen
          menghadirkan pengalaman perawatan kesehatan yang nyaman, terjangkau,
          dan berkualitas tinggi. Dikelola oleh tim medis profesional
          berpengalaman.
        </h4>
        <div className="mt-10 flex flex-col gap-y-5">
          {AlasanMemilihProps().map((list) => (
            <div
              key={list.id}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100/20 bg-emerald-100/10 transition-all duration-300 ease-in-out lg:hover:border-emerald-100/40 lg:hover:bg-emerald-100/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="mb-2 font-medium text-emerald-100">
                    {list.title}
                  </h3>
                  <div>
                    <ChevronRightIcon className="inline h-4 w-4 text-white group-hover:hidden" />
                    <ChevronDown className="hidden h-4 w-4 text-white group-hover:block" />
                  </div>
                </div>

                <p className="h-0 text-white opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
                  {list.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
