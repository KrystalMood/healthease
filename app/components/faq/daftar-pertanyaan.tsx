import { DataFAQ } from "~/data/faq";
import Card from "./card";

export default function DaftarPertanyaan(): JSX.Element {
  const faqs = DataFAQ();

  const groupedFAQs = faqs.reduce<Record<string, typeof faqs>>((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <main className="mx-auto my-20 w-[90%] max-w-[90%]">
      <h3 className="mb-8 cursor-default text-4xl font-bold text-emerald-700">
        Telusuri Semua Topik
      </h3>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groupedFAQs).map(([category, faqs]) => (
          <div
            key={category}
            className="transform rounded-lg transition-all duration-300 hover:scale-[1.01]"
          >
            <Card category={category} faqs={faqs} />
          </div>
        ))}
      </section>
    </main>
  );
}
