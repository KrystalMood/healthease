import { DataFAQ } from "~/data/faq";
import Accordion from "./accordion";

interface CardProps {
  category: string;
  faqs: ReturnType<typeof DataFAQ>;
}

export default function Card({ category, faqs }: CardProps) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-lg">
      <h4 className="mb-4 text-xl font-semibold">{category}</h4>
      {faqs.map(faq => <Accordion key={faq.id} question={faq.question} answer={faq.answer} />)}
    </article>
  );
}