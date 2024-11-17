import { useParams } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "@remix-run/react";
import DataFitur from "~/data/layanan";
import Header from "~/common/header";
import Footer from "~/common/footer";
export default function DetailFitur() {
  const { slug } = useParams();

  const fitur = DataFitur().find(
    (f) => f.title.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!fitur) {
    return <div>Fitur tidak ditemukan</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50/50">
        <div className="mx-auto w-[90%] py-24">
          <Link
            to="/layanan"
            className="mb-8 inline-flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Kembali ke Layanan
          </Link>

          <article className="rounded-xl bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-bold text-emerald-800">
              {fitur.title}
            </h1>

            <img
              src={fitur.image}
              alt={fitur.title}
              className="my-8 w-full rounded-xl object-cover shadow-md"
            />

            <p className="text-lg leading-relaxed text-gray-600">
              {fitur.description}
            </p>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-emerald-800">
                Manfaat Utama
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Diagnosis Lebih Akurat",
                    desc: "Teknologi AI kami menganalisis data medis dengan presisi tinggi untuk memberikan diagnosis yang lebih akurat",
                  },
                  {
                    title: "Waktu Lebih Efisien",
                    desc: "Proses diagnosis yang lebih cepat memungkinkan penanganan medis yang lebih tepat waktu",
                  },
                  {
                    title: "Pemantauan Real-time",
                    desc: "Monitoring kondisi pasien secara real-time dengan bantuan AI untuk deteksi dini",
                  },
                  {
                    title: "Rekomendasi Personal",
                    desc: "Saran pengobatan yang dipersonalisasi berdasarkan analisis AI terhadap kondisi spesifik pasien",
                  },
                ].map((manfaat, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-6"
                  >
                    <h3 className="font-semibold text-emerald-800">
                      {manfaat.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{manfaat.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-emerald-800">
                Cara Kerja
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "Input data kesehatan pasien ke dalam sistem",
                  "AI menganalisis data berdasarkan database medis yang komprehensif",
                  "Sistem menghasilkan rekomendasi diagnosis dan treatment",
                  "Dokter melakukan verifikasi dan finalisasi diagnosis",
                  "Pasien menerima hasil diagnosis dan rekomendasi pengobatan",
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                      {index + 1}
                    </span>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 p-8 text-white">
              <h2 className="text-2xl font-bold">
                Mulai Gunakan Fitur AI Kami
              </h2>
              <p className="mt-2 text-emerald-50">
                Tingkatkan kualitas pelayanan kesehatan Anda dengan teknologi AI
                canggih kami
              </p>
              <Link
                to="/daftar"
                className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 transition-all hover:bg-emerald-50"
              >
                Daftar Sekarang
              </Link>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
