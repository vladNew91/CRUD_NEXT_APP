import Image from "next/image";
import { handleSignUp } from "@/actions/actions";
import { SignInGitHubButton } from "./AuthGitHubBtns";

export const SignInForm = () => {
  return (
    <>
      {/* Form Header */}
      <div className="flex justify-center">
        <Image
          className="rounded-lg p-2 text-white sepia-0 transition duration-700 ease-in-out hover:sepia"
          src="/supabase-icon.svg"
          alt="Supabase logo"
          width={70}
          height={70}
          priority
        />
      </div>

      {/* Inputs and Actions */}
      <form action={handleSignUp} className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              Password
            </label>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:outline-none dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Continue
        </button>
      </form>

      {/* Social Provider Options */}
      <div className="relative my-2 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
        </div>
        <span className="relative bg-white px-3 text-xs text-zinc-400 uppercase dark:bg-zinc-950">
          Or sign in with:
        </span>
      </div>

      <div className="flex justify-center">
        <SignInGitHubButton />
      </div>
    </>
  );
};
