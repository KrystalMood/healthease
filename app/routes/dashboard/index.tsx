import { LoaderFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";


export default function Dashboard() {
  return (
    <>
      <Outlet />
    </>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/dashboard") return redirect("/dashboard/beranda");
  return null;
};
