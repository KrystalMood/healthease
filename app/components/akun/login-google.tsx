import { Link } from "@remix-run/react";

export default function LoginGoogle(): JSX.Element {
  return (
    <>
      <hr className="mx-auto mt-10 h-1 w-[70%] border-t-2 border-gray-300" />
      <button
        type="button"
        className="mx-auto mt-10 flex w-[70%] items-center justify-center gap-x-3 rounded-lg border-2 border-slate-200 py-3.5 font-semibold text-slate-600 transition-all duration-500 ease-in-out lg:hover:bg-slate-200"
      >
        <img src="/google.png" alt="" className="w-5" />
        <h4>Google</h4>
      </button>
    </>
  );
}
