/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodError, ZodSchema } from "zod";
import { AkunType } from "~/types/akun";

export function HandleErrorForm<T extends AkunType>(schema: ZodSchema, formData: T) {
  try {
    schema.parse(formData);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const schemaError: any = {};
      e.errors.forEach((err) => err.path.length && (schemaError[err.path[0]] = err.message));
      return schemaError;
    }
  }
}