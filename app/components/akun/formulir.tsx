import { ChangeEvent, useRef, useState } from "react";
import { Form, Link } from "@remix-run/react";
import { CheckCheck, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { HandleChangeForm } from "~/utils/handle-change-form";
import { HandleErrorForm } from "~/utils/handle-error-form";
import { AccountSchema } from "~/utils/schema";
import LoginGoogle from "./login-google";

export default function Formulir(): JSX.Element {
  const [loginForm, setLoginForm] = useState({ email: "", password: "", confirm_password: "" });
  const [errorForm, setErrorForm] = useState<Partial<typeof loginForm>>({});
  const [showPassword, setShowPassword] = useState(false);
  const password = useRef<HTMLInputElement | null>(null);

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    HandleChangeForm(e, setLoginForm, loginForm);
    const updatedErrors = HandleErrorForm(AccountSchema, { ...loginForm, [e.target.name]: e.target.value });
    setErrorForm((prevErrors) => ({ ...prevErrors, ...updatedErrors }));
  };

  return (
    <section className="flex h-[150vh] w-full flex-col items-center justify-center lg:h-[135vh]">
      <Link to={`/`}>
        <img src="/icon.png" alt="Logo" className="mb-4 w-44" />
      </Link>
      <h3 className="cursor-default text-2xl font-bold lg:text-3xl">
        Selamat Datang!
      </h3>
      <h5 className="mx-auto mt-2 w-3/4 cursor-default text-center text-lg">
        Saatnya Anda mencapai kesehatan yang lebih baik.
      </h5>
      <Form className="mt-8 flex w-full flex-col gap-4">
        <div className="relative mx-auto w-3/4">
          <div className="relative flex items-center">
            <label htmlFor="email" className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-md bg-white p-2">
              <Mail className="text-blue-500" size={16} />
            </label>
            <input
              autoComplete="on"
              className="w-full rounded-lg border bg-gray-100 py-3 pl-16 pr-4"
              id="email"
              name="email"
              onChange={handleChangeForm}
              placeholder="you@example.com"
              type="email"
              value={loginForm.email}
            />
          </div>
          {errorForm.email && (
            <p className="mt-1 text-xs text-red-500">{errorForm.email}</p>
          )}
        </div>
        <div className="relative mx-auto w-3/4">
          <div className="relative flex items-center">
            <label htmlFor="password" className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-md bg-white p-2">
              <Lock className="text-blue-500" size={16} />
            </label>
            <input
              autoComplete="off"
              className="w-full rounded-lg border bg-gray-100 py-3 pl-16 pr-12"
              id="password"
              name="password"
              onChange={handleChangeForm}
              placeholder="Masukkan Kata Sandi"
              ref={password}
              value={loginForm.password}
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-blue-500"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errorForm.password && (
            <p className="mt-1 text-xs text-red-500">{errorForm.password}</p>
          )}
        </div>
        <div className="relative mx-auto w-3/4">
          <div className="relative flex items-center">
            <label htmlFor="confirm_password" className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-md bg-white p-2">
              <CheckCheck className="text-blue-500" size={16} />
            </label>
            <input
              autoComplete="off"
              className="w-full rounded-lg border bg-gray-100 py-3 pl-16 pr-12"
              id="confirm_password"
              name="confirm_password"
              onChange={handleChangeForm}
              placeholder="Masukkan Kata Sandi"
              value={loginForm.confirm_password}
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-blue-500"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errorForm.confirm_password && (
            <p className="mt-1 text-xs text-red-500">
              {errorForm.confirm_password}
            </p>
          )}
        </div>
        <Link
          to={`/lupa-kata-sandi`}
          className="mx-auto flex w-3/4 items-center justify-end text-sm text-blue-500"
        >
          <h4 className="w-fit transition-all duration-300 ease-in-out hover:text-blue-600 hover:underline">
            Lupa Kata Sandi
          </h4>
        </Link>
        <button
          type="submit"
          className="mx-auto mt-4 w-3/4 rounded-lg bg-blue-500 py-3 font-bold text-white transition-all duration-300 ease-in-out lg:hover:bg-blue-600"
        >
          Daftar
        </button>
      </Form>
      <LoginGoogle />
    </section>
  );
}