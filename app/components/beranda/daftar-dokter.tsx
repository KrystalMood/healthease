import { Mail, Phone } from "lucide-react";
import { DataDokterProps } from "~/types/beranda";
import { TruncateText } from "~/utils/truncate-text";

export default function DaftarDokter({ name, job, email, phone_number, image }: DataDokterProps) {
  return (
    <article 
      className="relative overflow-hidden rounded-xl bg-white shadow transition-all duration-300 hover:scale-105 hover:shadow-lg"
      aria-labelledby={`doctor-${name}`}
    >
      <figure className="relative h-64">
        <img src={image} alt={`Foto ${name}`} className="h-full w-full object-cover" />
        <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <h4 className="text-sm font-medium" id={`doctor-job-${name}`}>
            {job}
          </h4>
          <h5 className="text-xl font-bold" id={`doctor-${name}`}>
            {name}
          </h5>
        </figcaption>
      </figure>
      <section className="space-y-2 p-4" aria-label="Informasi kontak dokter">
        <ContactDetail icon={Mail} text={TruncateText(email, 12)} label="Email" />
        <ContactDetail icon={Phone} text={TruncateText(phone_number, 8)} label="Nomor Telepon" />
      </section>
    </article>
  );
}

function ContactDetail({ icon: Icon, text, label }: { icon: typeof Mail; text: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-600" aria-label={label}>
      <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
      <h4 className="text-sm">{text}</h4>
    </div>
  );
}