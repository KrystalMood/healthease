import { TimPengembang } from "~/data/tentang-kami";

export default function BertemuDenganTim(): JSX.Element {
  return (
    <section className="mx-auto mt-20 w-[90%]">
      <h2 className="cursor-default text-3xl font-semibold italic">
        Meet Our Team✨
      </h2>
      <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {TimPengembang.map(tim =>
          <figure key={tim.id} className="group flex transform flex-col rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:text-emerald-500 hover:shadow-2xl">
            <div className="relative mt-4 h-96 rounded-lg">
              <span className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img src={tim.image} alt={tim.name} className="h-full rounded-md object-cover" />
            </div>
            <figcaption className="mt-4 cursor-default text-center text-2xl font-bold">
              {tim.name}
            </figcaption>
            <figcaption className="mt-2 cursor-default text-center text-lg italic">
              {tim.job}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}