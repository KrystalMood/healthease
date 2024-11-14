import { useState } from "react";
import { Form, Link } from "@remix-run/react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import LoginGoogle from "./login-google";

export default function Formulir(): JSX.Element {
  const [_showPassword, _setShowPassword] = useState<boolean>(false);

  return (
    <section className="flex h-[140vh] w-full flex-col items-center justify-center lg:h-[120vh]">
      <h3 className="cursor-default text-2xl font-bold lg:text-3xl">
        Selamat Datang!
      </h3>
      <h5 className="mt-2 cursor-default text-lg">
        Lorem ipsum dolor sit amet consectetur.
      </h5>
      <Form onSubmit={() => {}} className="mt-8 flex w-full flex-col gap-4">
        <div className="relative mx-auto w-3/4">
          <label htmlFor="email" className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-md bg-white p-2">
            <Mail className="text-blue-500" size={16} />
          </label>
          <input
            name="email"
            id="email"
            type="text"
            className="w-full rounded-lg border bg-gray-100 py-3 pl-16 pr-4"
            placeholder="you@example.com"
          />
        </div>
        <div className="relative mx-auto w-3/4">
          <label htmlFor="password" className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-md bg-white p-2">
            <Lock className="text-blue-500" size={16} />
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="w-full rounded-lg border bg-gray-100 py-3 pl-16 pr-12"
            placeholder="Masukkan Kata Sandi"
          />
          <Eye className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-blue-500" size={16} />
        </div>
        <Link to={`/lupa-kata-sandi`} className="mx-auto flex w-3/4 items-center justify-end text-sm text-blue-500">
          <h4 className="w-fit transition-all duration-300 ease-in-out hover:text-blue-600 hover:underline">
            Lupa Kata Sandi
          </h4>
        </Link>
        <button type="submit" className="mx-auto mt-4 w-3/4 rounded-lg bg-blue-500 py-3 font-bold text-white transition-all duration-300 ease-in-out lg:hover:bg-blue-600">
          Daftar
        </button>
      </Form>
      <LoginGoogle />
    </section>
  );
}