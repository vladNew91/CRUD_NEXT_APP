"use client";

import { signout } from "@/app/(auth)/actions";

export const SignOutBtn = () => {
  const handleSignOut = async () => await signout();

  return (
    <form action={handleSignOut}>
      <button className="cursor-pointer text-base/7 text-white" type="submit">
        Sign Out
      </button>
    </form>
  );
};
