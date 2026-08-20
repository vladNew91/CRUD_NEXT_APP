import { SignInForm } from "@/components";
import { cn } from "@/utils/utils";

export default async function SignIn() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4">
      <div
        className={cn(
          "w-full max-w-md rounded-2xl border-2 border-green-400 p-8",
          "shadow-[0_0_15px_rgba(34,211,238,0.7),inset_0_0_15px_rgba(34,211,238,0.5)]",
        )}
      >
        <SignInForm />
      </div>
    </section>
  );
}
