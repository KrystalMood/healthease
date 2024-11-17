import {
  MessageSquare,
  Star,
  Send,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";
import { useState } from "react";

export default function KritikDanSaran(): JSX.Element {
  const [rating, setRating] = useState<number>(0);

  return (
    <article className="h-[850px] rounded-xl bg-white p-8 shadow-2xl lg:p-12">
      <header className="mb-8 flex flex-col items-center text-center">
        <MessageSquare
          className="h-12 w-12 text-emerald-600"
          aria-hidden="true"
        />
        <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
          Kritik & Saran
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Bantu kami meningkatkan layanan dengan memberikan masukan Anda.
        </p>
      </header>

      <form className="space-y-6" aria-label="Form Kritik dan Saran">
        <fieldset className="flex flex-col items-center space-y-2">
          <legend className="text-lg font-medium text-gray-700">
            Berikan Penilaian
          </legend>
          <div
            className="flex space-x-1"
            role="group"
            aria-label="Rating Bintang"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="transition-transform hover:scale-110"
                aria-label={`Beri rating ${star} bintang`}
                aria-pressed={rating >= star}
              >
                <Star
                  className={`h-8 w-8 ${
                    rating >= star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="sr-only">Informasi Pengirim</legend>

          <div>
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Masukkan nama lengkap Anda"
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Masukkan alamat email Anda"
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="kategori"
              className="block text-sm font-medium text-gray-700"
            >
              Kategori
            </label>
            <select
              id="kategori"
              name="kategori"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              aria-required="true"
            >
              <option value="">Pilih kategori</option>
              <option value="layanan">Layanan</option>
              <option value="aplikasi">Aplikasi</option>
              <option value="website">Website</option>
              <option value="dokter">Dokter</option>
              <option value="fasilitas">Fasilitas</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="pesan"
              className="block text-sm font-medium text-gray-700"
            >
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={4}
              required
              style={{ resize: "none", overflowY: "auto" }}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Tuliskan kritik dan saran Anda di sini..."
              aria-required="true"
            />
          </div>
        </fieldset>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <Send className="mr-2 h-5 w-5" aria-hidden="true" />
            <span>Kirim Masukan</span>
          </button>
        </div>
      </form>

      <footer className="mt-6 text-sm text-gray-600">
        <p className="flex items-center">
          <span
            className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"
            aria-hidden="true"
          ></span>
          Masukan Anda akan kami tinjau dalam 1-2 hari kerja
        </p>
      </footer>
    </article>
  );
}
