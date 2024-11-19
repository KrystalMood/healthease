import { ChangeEvent, useState } from "react";
import { Form, Link } from "@remix-run/react";
import { CheckCheck, Lock, Mail } from "lucide-react";
import Header from "./header";
import InputField from "./input";
import { HandleChangeForm } from "~/utils/handle-change-form";
import { HandleErrorForm } from "~/utils/handle-error-form";
import { AccountSchema } from "~/utils/schema";
import LoginGoogle from "./login-google";

export default function Formulir(): JSX.Element {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<typeof formData>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    HandleChangeForm(e, setFormData, formData);
    if (!e.target.value.trim())
      return setFormErrors((prev) => ({ ...prev, [e.target.name]: null }));
    const fieldError = HandleErrorForm(
      AccountSchema,
      { ...formData, [e.target.name]: e.target.value },
      e.target.name,
    );
    setFormErrors((prev) => ({ ...prev, [e.target.name]: fieldError }));
  };

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <Header />
      <Form className="mt-8 flex w-full flex-col gap-4">
        <InputField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="you@example.com"
          icon={<Mail className="text-emerald-500" size={16} />}
          error={formErrors.email}
        />
        <InputField
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Masukkan Kata Sandi"
          icon={<Lock className="text-emerald-500" size={16} />}
          toggleVisibility={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
          error={formErrors.password}
        />
        <InputField
          id="confirm_password"
          name="confirm_password"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirm_password}
          onChange={handleInputChange}
          placeholder="Konfirmasi Kata Sandi"
          icon={<CheckCheck className="text-emerald-500" size={16} />}
          toggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
          showPassword={showConfirmPassword}
          error={formErrors.confirm_password}
        />
        <Link
          to={`/lupa-kata-sandi`}
          className="mx-auto flex w-[70%] items-center justify-end text-sm text-emerald-500"
        >
          <h4 className="w-fit transition-all duration-300 ease-in-out hover:text-emerald-600 hover:underline">
            Lupa Kata Sandi
          </h4>
        </Link>
        <button
          onClick={() => window.location.href = "/dashboard"}
          type="submit"
          className="mx-auto mt-4 w-[70%] rounded-lg bg-emerald-500 py-3 font-bold text-white transition-all duration-300 ease-in-out lg:hover:bg-emerald-600"
        >
          Daftar
        </button>
      </Form>
      <LoginGoogle />
      <span className="mt-5 flex w-3/5 items-center justify-center text-sm text-slate-600">
        <h4 className="cursor-default">Sudah punya akun?</h4>
        <Link
          to={`/masuk`}
          className="ml-1 font-bold text-emerald-600/75 transition-all duration-500 ease-in-out lg:hover:text-emerald-600 lg:hover:underline"
        >
          Masuk
        </Link>
      </span>
    </section>
  );
}
