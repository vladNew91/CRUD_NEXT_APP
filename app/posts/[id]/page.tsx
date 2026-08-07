import { updatePost } from "@/actions/actions";
import ErrorPage from "@/app/error";
import { Post } from "@/types";
import { supabase } from "@/utils/supabase/client";
import { notFound } from "next/navigation";

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

  if (error) return ErrorPage(error);
  if (!post) return notFound();

  return (
    <>
      <h1 className="text-center m-3">{post.title}</h1>
      <span>{post.body}</span>

      <div
        className="
          max-w-md
          p-3
          bg-white
          dark:bg-gray-800
          rounded-xl
          shadow-md
          border
          border-gray-100
          dark:border-gray-700"
      >
        <form className="space-y-4" action={updatePost}>
          <h3>Update post</h3>
          <div>
            <label
              className="block
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              defaultValue={post.title}
              id="title"
              name="title"
              className="
                w-full
                mt-1
                px-3
                py-2
                border
                rounded-lg
                focus:ring-2
                focus:ring-blue-500
                dark:bg-gray-900
                dark:border-gray-700
                dark:text-white"
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
              className="
                w-full
                mt-1
                px-3
                py-2
                border
                rounded-lg
                focus:ring-2
                focus:ring-blue-500
                dark:bg-gray-900
                dark:border-gray-700
                dark:text-white"
              required
            />
          </div>
          <input type="hidden" id="id" name="id" value={id} />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}
