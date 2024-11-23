import { Link, useNavigate } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { DataFiturProps } from "~/types/layanan";

interface DetailFiturLayoutProps {
  fitur: DataFiturProps;
  manfaat: {
    title: string;
    desc: string;
  }[];
  steps: string[];
}
export default function DetailFiturLayout({
  fitur,
  manfaat,
  steps,
}: DetailFiturLayoutProps) {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/layanan/beranda?scrollToFitur=true")
  };
  return (
    <main className="min-h-screen bg-gray-50/50">
      <div className="mx-auto w-[90%] py-24">
        <button
          onClick={handleBack}
          className="mb-8 inline-flex items-center text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Kembali ke Layanan
        </button>

        <article className="rounded-xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-emerald-800">{fitur.title}</h1>

          <img
            src={fitur.image}
            alt={fitur.title}
            className="my-8 h-[400px] w-full rounded-xl object-cover shadow-md"
          />

          <p className="text-lg leading-relaxed text-gray-600">
            {fitur.description}
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-emerald-800">
              Manfaat Utama
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {manfaat.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-6"
                >
                  <h3 className="text-lg font-bold text-emerald-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-emerald-800">Cara Kerja</h2>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-x-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 p-8 text-white">
            <h2 className="text-2xl font-bold">Mulai Gunakan {fitur.title}</h2>
            <p className="mt-2 text-lg">
              Tingkatkan kualitas pelayanan kesehatan Anda dengan{" "}
              {fitur.title.toLowerCase()} kami
            </p>
            <Link
              to={"/daftar"}
              className="mt-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-emerald-800 hover:bg-emerald-50"
            >
              Daftar Sekarang
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
