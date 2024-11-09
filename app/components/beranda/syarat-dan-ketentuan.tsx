import { Link } from "@remix-run/react";

export default function SyaratDanKetentuan(): JSX.Element {
  return (
    <section className="my-14 text-center">
      <h5 className="text-sm text-gray-600">
        Dengan mendaftar, Anda menyetujui&nbsp;
        <Link to={`/`} className="text-emerald-600 hover:underline">
          Syarat & Ketentuan
        </Link>
        &nbsp; dan&nbsp;
        <Link to={`/`} className="text-emerald-600 hover:underline">
          Kebijakan Privasi
        </Link>
        &nbsp; kami
      </h5>
    </section>
  );
}