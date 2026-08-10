import { cn } from "@/lib/utils";
import { auth } from "@/auth/auth";
import { createPost } from "@/actions/actions";
import SubmitFormBtn from "@/components/SubmitFormBtn";

export default async function Home() {
  const session = await auth();

  return (
    <div
      className={cn(
        "w-md rounded-xl border-gray-100",
        "bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-800",
      )}
    >
      <form className="space-y-4" action={createPost}>
        <h3>
          {!session
            ? "Create post"
            : `Welcome, ${session.user?.name} create post`}
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>

          <input
            type="text"
            id="title"
            name="title"
            className={cn(
              "mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2",
              "focus:ring-blue-500 dark:bg-gray-900 dark:text-white",
            )}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Content
          </label>

          <input
            type="text"
            id="body"
            name="body"
            className={cn(
              "mt-1 w-full py-2 focus:ring-blue-500 dark:border-gray-700",
              "rounded-lg border px-3 focus:ring-2 dark:bg-gray-900 dark:text-white",
            )}
            required
          />
        </div>

        <SubmitFormBtn />
      </form>
    </div>
  );
}
