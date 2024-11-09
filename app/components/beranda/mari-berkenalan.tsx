export default function MariBerkenalan(): JSX.Element {
  return (
    <section className="mx-auto mt-28 flex w-[90%] cursor-default flex-col gap-x-16 text-justify lg:flex-row lg:text-left">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
        Mari berkenalan&nbsp; dengan&nbsp;
        <span className="text-emerald-600">tim dokter kami.</span>
      </h1>
      <h4 className="mt-4 text-xl font-light italic leading-relaxed text-gray-600 md:text-2xl lg:mt-0">
        Dokter-dokter kami adalah praktisi berpengalaman yang berkomitmen untuk
        memberikan perawatan terbaik. Dengan keahlian di berbagai bidang, mereka
        siap membantu menjaga kesehatan Anda.
      </h4>
    </section>
  );
}