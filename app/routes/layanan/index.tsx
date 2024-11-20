import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import Hero from "~/components/layanan/hero";
import LayananKesehatanTerlengkap from "~/components/layanan/layanan-kesehatan-terlengkap";
import Fitur from "~/components/layanan/fitur";
import Footer from "~/common/footer";
import { Outlet, redirect } from "@remix-run/react";
import { useRef } from "react";

export default function Layanan() {
  return (
    <>
      <Outlet />
    </>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/layanan") return redirect("/layanan/beranda");
  return null;
};
