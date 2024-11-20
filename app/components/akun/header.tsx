import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <>
      <Link to={`/`}>
        <img src="/icon.png" alt="Logo" className="mb-4 w-44" />
      </Link>
      <h3 className="cursor-default text-2xl font-bold lg:text-3xl">
        Selamat Datang!
      </h3>
      <h5 className="mx-auto mt-2 w-3/4 cursor-default text-center text-lg">
        Saatnya Anda mencapai kesehatan yang lebih baik.
      </h5>
    </>
  );
}