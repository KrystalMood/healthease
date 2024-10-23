import React from 'react';
import { ArrowRight, Phone, Calendar, MessageCircle, Clock } from 'lucide-react';

interface CTAFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ctaFeatures: CTAFeature[] = [
  {
    icon: <Phone className="w-6 h-6 text-emerald-600" />,
    title: "Konsultasi 24/7",
    description: "Tim dokter kami siap melayani Anda kapan saja, dimana saja"
  },
  {
    icon: <Calendar className="w-6 h-6 text-emerald-600" />,
    title: "Jadwal Fleksibel",
    description: "Atur jadwal konsultasi sesuai dengan kesibukan Anda"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
    title: "Respon Cepat",
    description: "Dapatkan tanggapan dokter dalam waktu kurang dari 15 menit"
  },
  {
    icon: <Clock className="w-6 h-6 text-emerald-600" />,
    title: "Akses Seumur Hidup",
    description: "Rekam medis dan riwayat konsultasi tersimpan dengan aman"
  }
];

export default function IndexCTA(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 w-[90vw]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-xl tracking-tight">
            Mulai perjalanan 
            <span className="text-emerald-600"> kesehatan Anda</span> hari ini.
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            Kesehatan Anda adalah prioritas kami. Dengan teknologi modern dan tim 
            dokter berpengalaman, kami siap memberikan pelayanan kesehatan terbaik 
            untuk Anda dan keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {ctaFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative bg-white rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-emerald-100 rounded-xl transform rotate-1"></div>
              <div className="relative bg-white rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-emerald-600 rounded-xl transform -rotate-2"></div>
          <div className="relative bg-emerald-500 rounded-xl px-8 py-16 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Siap untuk memulai?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-emerald-50">
                Daftar sekarang dan dapatkan konsultasi pertama Anda secara gratis!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-colors duration-200">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-emerald-400 transition-colors duration-200">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-emerald-50">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>0800-123-4567</span>
              </div>
              <div className="w-px h-6 bg-emerald-400 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>info@healthcenter.com</span>
              </div>
              <div className="w-px h-6 bg-emerald-400 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Buka 24 Jam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500">
            Dengan mendaftar, Anda menyetujui{' '}
            <a href="#" className="text-emerald-600 hover:underline">Syarat & Ketentuan</a>
            {' '}dan{' '}
            <a href="#" className="text-emerald-600 hover:underline">Kebijakan Privasi</a>
            {' '}kami
          </p>
        </div>
      </div>
    </div>
  );
}