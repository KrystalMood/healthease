import { FeatureCardProps } from "~/types/pusat-bantuan";

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="group flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="rounded-full bg-emerald-50 p-4 transition-colors duration-300 group-hover:bg-emerald-100">
        <Icon className="h-8 w-8 text-emerald-600" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </article>
  );
} 