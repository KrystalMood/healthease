import { ChevronRight } from "lucide-react";

export default function Fitur(): JSX.Element {
  const daftar_layanan = ["Fitur AI", "Penjadwalan Otomatis", "Manajemen Data Pasien", "Portal Kesehatan", "Telemedicine", "Pengingat Obat"];

  return (
    <section className="mx-auto mb-20 flex w-[90%] gap-x-12">
      <div className="relative hidden lg:flex">
        <span className="absolute inset-0 -z-10 rotate-3 rounded-xl bg-green-400" />
        <img
          src="/fitur.webp"
          alt="Fitur yang Kami Tawarkan."
          className="rounded-xl object-cover shadow-md transition-all duration-300 hover:-rotate-3"
        />
      </div>
      <div className="relative flex w-fit flex-col rounded-lg border-2 border-gray-100 px-12 py-8 shadow-lg">
        <h2 className="cursor-default text-3xl font-bold lg:text-5xl">
          Fitur yang Kami Tawarkan
        </h2>
        <h5 className="mt-4 cursor-default">
          Temukan keunggulan&nbsp;
          <span className="text-emerald-600">HealthEase</span>, dengan
          fitur-fitur modern yang siap mendukung kebutuhan kesehatan Anda. Dari
          teknologi AI hingga kemudahan akses layanan kesehatan, kami hadir
          untuk memberikan pengalaman terbaik dalam merawat kesehatan Anda. Mari
          jelajahi dan nikmati kemudahan yang kami tawarkan.
        </h5>
        <ul className="mt-8 flex flex-col gap-4">
          {daftar_layanan.map((list, index: number) => (
            <li key={index} className="flex cursor-pointer items-center justify-between border-b-2 border-emerald-50 pb-3 transition-all duration-300 ease-in-out hover:translate-x-2">
              <div className="flex items-center justify-center font-semibold">
                <span className="mr-4 flex rounded-full bg-green-200 px-3 py-2">
                  {index + 1}.
                </span>
                <h4 className="text-xl">{list}</h4>
              </div>
              <ChevronRight />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}