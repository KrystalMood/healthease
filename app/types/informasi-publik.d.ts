import { ComponentType } from "react";

export interface DataHeroProps {
  title: string;
  description: string;
  image: string;
}

export type Frontmatter = {
  gambar: string;
  judul: string;
  deskripsi: string;
  tanggal: date | string;
};

export type MDXModule = {
  default: ComponentType;
  frontmatter: Frontmatter;
};