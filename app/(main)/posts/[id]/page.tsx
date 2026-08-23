import { updatePost } from "@/app/(auth)/actions";
import notFound from "@/app/not-found";
import ErrorPage from "@/app/error";
import { Post } from "@/types";
import { supabase } from "@/utils/supabase/client";
import { cn } from "@/utils/utils";

type PostPageProps = {
  params: Promise<{ id: number }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single<Post>();

  if (!post || !id) return notFound();
  if (error) return ErrorPage(error);

  return (
    <section
      className={cn(
        "w-md rounded-xl border border-gray-100 bg-white",
        "p-3 shadow-md dark:border-gray-700 dark:bg-gray-800",
      )}
    >
      <form className="space-y-4" action={updatePost}>
        <h3>Edit post</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            defaultValue={post.title}
            id="title"
            name="title"
            className={cn(
              "mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2",
              "focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white",
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
            defaultValue={post.body}
            id="body"
            name="body"
            className={cn(
              "mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2",
              "focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white",
            )}
            required
          />
        </div>
        <input type="hidden" id="id" name="id" value={id} />
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </section>
  );
}
