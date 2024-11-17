import { PopularQuestions } from "~/data/faq";

export default function PertanyaanPopuler(): JSX.Element {
  const popularQuestions = PopularQuestions();

  return (
    <section className="mx-auto my-20 w-[90%] max-w-[90%]">
      <h3 className="mb-8 cursor-default text-4xl font-bold text-emerald-700">
        Pertanyaan Populer
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {popularQuestions.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <h4 className="mb-4 font-semibold text-emerald-600">{item.question}</h4>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 