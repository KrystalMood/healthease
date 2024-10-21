import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FeatureProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const featureList: FeatureProps[] = [
  {
    id: 1,
    image: "template.jpeg",
    title: "Virtual Health Consultations",
    subtitle:
      "Schedule appointments with healthcare professionals online from the comfort of your home.",
  },
  {
    id: 2,
    image: "template.jpeg",
    title: "Mental Health Support",
    subtitle:
      "Services include therapy sessions, stress management, and mental health resources.",
  },
  {
    id: 3,
    image: "template.jpeg",
    title: "Personalized Health Plans",
    subtitle:
      "Focus areas include diet, exercise, mental well-being, and chronic condition management.",
  },
  {
    id: 4,
    image: "template.jpeg",
    title: "Chronic Disease Management",
    subtitle:
      "Ongoing support and care for managing chronic conditions such as diabetes, hypertension, and heart disease.",
  },
  {
    id: 5,
    image: "template.jpeg",
    title: "Preventive Care & Wellness Checkups",
    subtitle:
      "Routine screenings and checkups designed to prevent illness and promote long-term health.",
  },
  {
    id: 6,
    image: "templateAnime.jpg",
    title: "lorem ipsum",
    subtitle: "lorem ipsum, dolor amet kung lao liu kang fatality",
  },
];

const FeatureCard = ({ feature }: { feature: FeatureProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <CheckCircle2 className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.subtitle}</p>
        </div>

        <div
          className={`mt-4 flex items-center text-blue-600 transition-all duration-300 ${
            isHovered ? "translate-x-2" : ""
          }`}
        >
          <span className="font-medium">Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default function IndexFeatures(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Comprehensive Healthcare
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need for better health
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 italic">
            Access professional healthcare services and personalized wellness
            solutions, all in one place
          </p>
        </div>

        <div className="relative mt-12">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-50 px-3 text-lg font-medium text-gray-900">
              Our Services
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
