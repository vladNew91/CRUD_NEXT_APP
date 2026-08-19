import { auth } from "@/app/(auth)/auth";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function checkUserSession() {
  try {
    const session = await auth();
    return session;
  } catch {
    return null;
  }
}
