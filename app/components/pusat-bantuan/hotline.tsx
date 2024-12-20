import { Link } from "@remix-run/react";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function HotLine(): JSX.Element {
  return (
    <section className="mx-auto h-fit w-[90%] rounded-xl border-4 border-gray-200 shadow-2xl transition-all duration-300 hover:scale-[1.005] hover:border-emerald-500">
      <article className="h-full rounded-lg bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white shadow-lg lg:p-12">
        <header className="mb-8">
          <h2 className="text-3xl font-bold lg:text-4xl">Hubungi Kami</h2>
          <p className="mt-4 text-lg text-emerald-50">
            Kami siap membantu Anda dengan berbagai pertanyaan dan kebutuhan.
            Jangan ragu untuk menghubungi kami melalui:
          </p>
        </header>
        <nav className="mt-12 space-y-8" aria-label="Informasi Kontak">
          <article className="flex items-start space-x-4">
            <PhoneCall className="h-6 w-6 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-semibold">Telepon</h3>
              <address className="mt-1 not-italic text-emerald-50">
                0800-123-4567 (Bebas Pulsa)
                <br />
                021-123-4567
              </address>
            </div>
          </article>
          <article className="flex items-start space-x-4">
            <Mail className="h-6 w-6 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <address className="mt-1 not-italic text-emerald-50">
                <Link to="mailto:bantuan@healthease.com" className="hover:underline">
                  bantuan@healthease.com
                </Link>
                <br />
                <Link to="mailto:info@healthease.com" className="hover:underline">
                  info@healthease.com
                </Link>
              </address>
            </div>
          </article>
          <article className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-semibold">Alamat</h3>
              <address className="mt-1 not-italic text-emerald-50">
                Jl. Raya Malang No. 123
                <br />
                Malang, 12345
              </address>
            </div>
          </article>
        </nav>
        <aside className="mt-12">
          <h3 className="text-xl font-semibold">Jam Operasional</h3>
          <dl className="mt-4 space-y-2 text-emerald-50">
            <div className="flex justify-between">
              <dt>Senin - Jumat:</dt>
              <dd>08:00 - 20:00</dd>
            </div>
            <div className="flex justify-between">
              <dt>Sabtu:</dt>
              <dd>09:00 - 17:00</dd>
            </div>
            <div className="flex justify-between">
              <dt>Minggu:</dt>
              <dd>09:00 - 15:00</dd>
            </div>
          </dl>
        </aside>
      </article>
    </section>
  );
}