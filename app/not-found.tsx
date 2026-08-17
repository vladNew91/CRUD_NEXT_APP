import { cn } from "@/utils/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid place-items-center p-2">
      <section className="text-center">
        {/* Animated Gradient Accent */}
        <p className="animate-pulse text-[12rem] font-semibold text-indigo-400">
          404
        </p>

        {/* Main Heading */}
        <h1 className="text-xl font-bold tracking-tight text-white">
          Page not found
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-md text-sm leading-7 text-slate-400">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL or the page has moved.
        </p>

        {/* Action Buttons */}
        <div className="m-4 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className={cn(
              "rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white",
              "shadow-sm transition-all duration-200 hover:bg-indigo-400 focus-visible:outline",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400",
            )}
          >
            Go back home
          </Link>
        </div>
      </section>
    </main>
  );
}
