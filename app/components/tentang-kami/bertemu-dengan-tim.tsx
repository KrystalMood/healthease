import { TimPengembang } from "~/data/tentang-kami";

export default function BertemuDenganTim(): JSX.Element {
  return (
    <section className="mx-auto mt-24 w-[90%]">
      <h2 className="cursor-default text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Bertemu dengan <span className="text-emerald-600">Tim Kami</span>
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        Kami bangga memperkenalkan tim yang berdedikasi di balik HealthEase
      </p>
      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {TimPengembang.map((tim) => (
          <figure
            key={tim.id}
            className="group flex transform flex-col overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-80">
              <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={tim.image}
                alt={tim.name}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="flex flex-col space-y-2 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-emerald-600">
                {tim.name}
              </h3>
              <p className="text-lg font-medium text-emerald-600">{tim.job}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
