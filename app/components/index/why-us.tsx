interface BenefitProps {
  id: number;
  title: string;
  subtitle: string;
}

const benefitList: BenefitProps[] = [
  {
    id: 1,
    title: "Ease of Access",
    subtitle:
      "With our intuitive platform, you can schedule appointments, consult with specialists, and access your health records from anywhere. No more long waits or complicated processes—your health is just a click away.",
  },
  {
    id: 2,
    title: "Patient-Centered",
    subtitle:
      "At HealthEase, you're more than just a patient—you're at the center of everything we do. We listen to your needs, offer tailored health plans, and support your journey to wellness every step of the way.",
  },
  {
    id: 3,
    title: "24/7 Support",
    subtitle:
      "Our team is here for you around the clock, offering real-time support through chat, phone, or video consultations. Whether it's a routine checkup or an emergency, HealthEase ensures that help is always available.",
  },
  {
    id: 4,
    title: "Data Security",
    subtitle:
      "Your health information is sensitive, and we take that seriously. HealthEase uses cutting-edge encryption and security protocols to ensure your personal data is always protected, giving you peace of mind.",
  },
];

export default function IndexWhyUs(): JSX.Element {
  return (
    <div className="min-h-screen container mx-auto py-6 px-4">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          Why <span className="text-emerald-500">HealthEase?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl">
          We believe healthcare should be simple, accessible, and designed with
          you in mind. Here's what sets us apart
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-4 mt-12">
          {benefitList.map((benefit, index) => (
            index < 3 && (
              <div
                key={benefit.id}
                className={`
                  ${index % 2 === 0 ? 'w-80 h-80' : 'w-96 h-96'}
                  bg-teal-200 rounded-2xl p-6
                  flex flex-col items-center justify-center text-center
                `}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.subtitle}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}