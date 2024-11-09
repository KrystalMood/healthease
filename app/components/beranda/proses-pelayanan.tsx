import { ProsesPelayananProps } from "~/data/beranda";

export default function ProsesPelayanan(): JSX.Element {
  return (
    <section className="mx-auto mt-20 grid w-[90%] cursor-default grid-cols-1 gap-6 lg:grid-cols-3">
      {ProsesPelayananProps().map((proses, i: number) => (
        <div key={proses.id} className="flex transform transition-all duration-300 lg:hover:translate-x-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-600">
            {i + 1}
          </span>
          <span className="ml-3 flex w-fit flex-col gap-2">
            <h3 className="text-xl font-bold tracking-tight text-gray-800 md:text-2xl">
              {proses.title}
            </h3>
            <h5 className="text-lg leading-relaxed text-gray-600">
              {proses.description}
            </h5>
          </span>
        </div>
      ))}
    </section>
  );
}