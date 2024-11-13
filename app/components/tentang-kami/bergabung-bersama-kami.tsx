import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";

export default function BergabungBersamaKami(): JSX.Element {
  return (
    <section className="mx-auto my-20 flex w-full cursor-default flex-col px-[5%] lg:flex-row">
      <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:w-1/2 xl:text-5xl">
        Bergabung Bersama&nbsp;
        <br />
        <span className="text-emerald-600">Tim Kami.</span>
      </h2>
      <div className="mt-4 lg:w-1/2 xl:mt-0">
        <h4 className="text-lg font-light italic leading-relaxed text-gray-600 md:text-xl">
          Kami percaya bahwa dibutuhkan orang-orang hebat untuk membuat produk
          hebat. Itulah mengapa kami tidak hanya merekrut profesional yang
          sempurna, tetapi orang-orang yang menghayati nilai-nilai perusahaan
          kami.
        </h4>
        <Link to={`/karir`} className="group mt-4 flex w-fit items-center justify-center gap-1 font-semibold text-amber-600 transition-colors duration-300 group-hover:text-amber-700 md:justify-start lg:hover:text-amber-400">
          <h5>Lihat Peluang Karir</h5>
          <ChevronRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}