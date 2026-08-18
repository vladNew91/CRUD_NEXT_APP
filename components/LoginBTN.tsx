import { signIn, signOut } from "next-auth/react";
import { FiGithub } from "react-icons/fi";

export function LoginButton() {
  const signInGitHub = () => signIn("github");

  return (
    <button
      className="box-border cursor-pointer rounded-lg p-2 font-semibold text-white hover:bg-white/5"
      onClick={signInGitHub}
    >
      <span title="Login with GitHub">
        <FiGithub size={20} />
      </span>
    </button>
  );
}

export function LogoutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
