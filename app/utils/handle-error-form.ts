/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodError, ZodSchema } from "zod";
import { AkunType } from "~/types/akun";

export function HandleErrorForm(schema: ZodSchema, formData: AkunType, fieldName: string) {
  try {
    schema.parse(formData);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const fieldError = e.errors.find(err => err.path[0] === fieldName);
      return fieldError?.message || null;
    }
    return null;
  }
}
