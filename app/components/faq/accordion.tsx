import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-300">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between py-2 text-left focus:outline-none">
        <span className="text-sm font-medium">{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mb-4 text-sm text-gray-600">{answer}</p>}
    </div>
  );
}