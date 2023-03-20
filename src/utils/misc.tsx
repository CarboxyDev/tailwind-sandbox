import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export const clsxtw = (...classes: ClassValue[]) => twMerge(clsx(...classes));
