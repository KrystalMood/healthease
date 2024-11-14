import { Link } from "@remix-run/react";

export default function LoginGoogle(): JSX.Element {
  return (
    <>
      <hr className="mx-auto mt-10 h-1 w-3/4 border-t-2 border-slate-800/40" />
      <button type="button" className="mx-auto mt-10 flex w-3/4 items-center justify-center gap-x-3 rounded-lg border-2 border-slate-200 py-3.5 font-semibold text-slate-600 transition-all duration-500 ease-in-out lg:hover:bg-slate-200">
        <img src="/google.png" alt="" className="w-5" />
        <h4>Google</h4>
      </button>
      <span className="mt-5 flex w-4/5 items-center justify-center text-sm text-slate-600">
        <h4 className="cursor-default">Sudah punya akun?</h4>
        <Link to={`/masuk`} className="ml-1 font-bold text-emerald-600/75 transition-all duration-500 ease-in-out lg:hover:text-emerald-600 lg:hover:underline">
          Masuk
        </Link>
      </span>
    </>
  );
}