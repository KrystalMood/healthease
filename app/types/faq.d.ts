export interface DataFAQProps {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export interface PopularQuestionProps {
  id: number;
  question: string;
  answer: string;
}

export interface ContactProps {
  id: number;
  icon: JSX.Element;
  title: string;
  detail: string;
  description: string;
}