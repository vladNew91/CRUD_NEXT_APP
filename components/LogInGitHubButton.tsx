"use client";

import { signIn, signOut } from "next-auth/react";
import { FiGithub } from "react-icons/fi";

export function LogInGitHubButton() {
  const signInGitHub = async () => await signIn("github");

  return (
    <button
      className="box-border cursor-pointer rounded-lg p-2 font-semibold text-white hover:bg-white/5"
      onClick={signInGitHub}
    >
      <span title="Log in with GitHub">
        <FiGithub size={20} />
      </span>
    </button>
  );
}

export function LogOutGitHubButton() {
  return (
    <button
      className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
