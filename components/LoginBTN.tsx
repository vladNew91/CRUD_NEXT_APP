"use client";
import { signIn, signOut } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
      onClick={() => signIn("github")}
    >
      Sign In with GitHub
    </button>
  );
}

export function LogoutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
