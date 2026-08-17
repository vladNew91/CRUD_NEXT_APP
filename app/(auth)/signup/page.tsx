import { handleSignUp } from "@/actions/actions";
import { SubmitFormButton } from "@/components";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { cn } from "@/utils/utils";

export default async function SignUpPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log({ user });

  return (
    <div
      className={cn(
        "w-md rounded-xl border-gray-100",
        "bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-800",
      )}
    >
      <form className="space-y-4" action={handleSignUp}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Mail
          </label>

          <input
            type="text"
            id="email"
            name="email"
            className={cn(
              "mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2",
              "focus:ring-blue-500 dark:bg-gray-900 dark:text-white",
            )}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>

          <input
            type="text"
            id="password"
            name="password"
            className={cn(
              "mt-1 w-full py-2 focus:ring-blue-500 dark:border-gray-700",
              "rounded-lg border px-3 focus:ring-2 dark:bg-gray-900 dark:text-white",
            )}
            required
          />
        </div>
        <SubmitFormButton title="Sign up" />
      </form>
    </div>
  );
}
