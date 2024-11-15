import ItemFitur from "./item-fitur";

export default function DaftarFitur({
  features,
  activeIndex,
  setActiveIndex,
}: {
  features: { title: string; description: string; image: string }[];
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}) {
  return (
    <ul className="mt-8 flex flex-col gap-4">
      {features.map((feature, index) => (
        <ItemFitur
          key={index}
          index={index}
          title={feature.title}
          description={feature.description}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </ul>
  );
}