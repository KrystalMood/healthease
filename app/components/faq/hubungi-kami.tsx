import { ContactData } from "~/data/faq";

export default function HubungiKami(): JSX.Element {
  const contacts = ContactData();

  return (
    <section className="mx-auto mb-20 w-[90%] max-w-[90%]">
      <h3 className="mb-8 cursor-default text-4xl font-bold text-emerald-700">
        Masih Butuh Bantuan?
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {contacts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-md transition-all duration-300 hover:shadow-lg"
          >
            {item.icon}
            <h4 className="mt-4 font-semibold text-gray-800">{item.title}</h4>
            <p className="mt-2 font-medium text-emerald-600">{item.detail}</p>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 