/* eslint-disable @typescript-eslint/ban-types */
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export function HandleForm<T extends Object>(e: ChangeEvent<HTMLInputElement>, setFormData: Dispatch<SetStateAction<T>>, formData: T) {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
}