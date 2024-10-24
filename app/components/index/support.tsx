import React from "react";
import { motion } from "framer-motion";

interface AccordionProps {
  title: string;
  subtitle: string;
}

const accordionList: AccordionProps[] = [
  {
    title: "Layanan Terjangkau",
    subtitle:
      "Pasien HealthEase dapat menghemat hingga 40% biaya pengobatan melalui program asuransi kesehatan yang kami terima.",
  },
  {
    title: "Proses Pendaftaran Mudah",
    subtitle:
      "Sistem pendaftaran online yang efisien dan responsif untuk kenyamanan pasien.",
  },
  {
    title: "Perawatan Berkualitas",
    subtitle:
      "Tim dokter spesialis berpengalaman dan fasilitas medis modern untuk hasil perawatan optimal.",
  },
];

export default function IndexSupport() {
  return (
    <div className="h-[170vh] bg-gradient-to-br from-emerald-950 to-emerald-900">
      <div className="w-[90vw] mx-auto px-6 lg:px-8 h-full items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-16">
          <div className="lg:w-1/2 h-full relative hidden lg:block">
            <div className="absolute inset-0 bg-emerald-900/10 backdrop-blur-sm rounded-3xl" />
            <img
              src="templateAnime.jpg"
              alt="Support Image"
              className="hidden md:block h-full w-full object-cover shadow-2xl"
            />
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-light text-gray-50 leading-tight tracking-tight">
                We care for your health,{" "}
                <span className="font-medium block mt-2">
                  we heal with heart
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
                <span className="text-emerald-200 font-medium">HealthEase</span>{" "}
                adalah pusat layanan kesehatan modern yang berkomitmen
                menghadirkan pengalaman perawatan kesehatan yang nyaman,
                terjangkau, dan berkualitas tinggi. Dikelola oleh tim medis
                profesional berpengalaman.
              </p>
            </div>

            <div className="space-y-4">
              {accordionList.map((list, index) => (
                <div
                  key={list.title}
                  className="group relative overflow-hidden"
                >
                  <div
                    className="relative p-6 bg-emerald-100/10 backdrop-blur-md rounded-2xl 
                                border border-emerald-100/20 hover:border-emerald-100/40
                                transition-all duration-300 ease-in-out
                                hover:bg-emerald-100/20"
                  >
                    <div className="space-y-2">
                      <h2 className="text-xl font-medium text-emerald-100 tracking-wide">
                        {list.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {list.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
