import { ProsesPelayananProps } from "~/data/beranda";

export default function ProsesPelayanan(): JSX.Element {
  return (
    <section className="mx-auto mt-24 w-[90%] cursor-default">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ProsesPelayananProps().map((proses, i: number) => (
          <div
            key={proses.id}
            className="flex transform flex-col rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="mb-4 flex items-center">
              <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-600">
                {i + 1}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                {proses.title}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              {proses.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
