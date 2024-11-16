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
    <main className="mx-auto my-20 w-[90%]">
      <h3 className="cursor-default text-3xl font-semibold">
        Telusuri semua topik
      </h3>
      <section className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groupedFAQs).map(([category, faqs]) => <Card key={category} category={category} faqs={faqs} />)}
      </section>
    </main>
  );
}