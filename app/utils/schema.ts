/* eslint-disable no-control-regex */
import { z } from "zod";

export const AccountSchema = z.object({
  email: z.string().trim().email({ message: "Email tidak valid!" }).min(1, { message: "Surel tidak boleh kosong!" }).regex(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g, { message: "Surel Anda tidak valid!" }),
  password: z.string().regex(/[A-Z]/, { message: "Kata sandi harus memiliki setidaknya 1 huruf besar!" }).regex(/[0-9]/, { message: "Kata sandi harus memiliki setidaknya 1 angka!" }).min(7, { message: "Kata sandi harus memiliki setidaknya 7 karakter!" }).min(1, { message: "Kata sandi tidak boleh kosong!" }),
  confirm_password: z.string().trim(),
}).refine(data => data.password === data.confirm_password, {
  message: "Kata sandi tidak cocok!",
  path: ["confirm_password"],
});