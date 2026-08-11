import { signIn, signOut } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      className="box-border block rounded-lg p-2 text-base/7 font-semibold text-white hover:bg-white/5"
      onClick={() => signIn("github")}
    >
      Sign In with GitHub
    </button>
  );
}

export function LogoutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
