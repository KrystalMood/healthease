import { Eye, EyeOff } from "lucide-react";
import { InputFieldProps } from "~/types/akun";

export default function InputField({
  id,
  name,
  type,
  value,
  placeholder,
  icon,
  onChange,
  error,
  toggleVisibility,
  showPassword,
}: InputFieldProps) {
  return (
    <div className="relative mx-auto w-[70%]">
      <div className="relative flex items-center">
        <label htmlFor={id} className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-md bg-white p-2">
          {icon}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-lg border bg-gray-100 py-3 pl-16 pr-12"
        />
        {toggleVisibility && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-emerald-500"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && <h5 className="mt-1 text-xs text-red-500">{error}</h5>}
    </div>
  );
}