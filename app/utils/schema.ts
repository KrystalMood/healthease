/* eslint-disable no-control-regex */
import { z } from "zod";

export const AccountSchema = z.object({
  email: z.string().trim().email({ message: "Email tidak valid!" }).min(1, { message: "Surel tidak boleh kosong!" }).regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, { message: "Surel Anda tidak valid!" }),
  password: z.string().trim().regex(/[A-Z]/, { message: "Kata sandi harus memiliki setidaknya 1 huruf besar!" }).regex(/[0-9]/, { message: "Kata sandi harus memiliki setidaknya 1 angka!" }).min(7, { message: "Kata sandi harus memiliki setidaknya 7 karakter!" }).min(1, { message: "Kata sandi tidak boleh kosong!" }),
  confirm_password: z.string().trim(),
}).refine(data => data.password === data.confirm_password, {
  message: "Kata sandi tidak cocok!",
  path: ["confirm_password"],
});