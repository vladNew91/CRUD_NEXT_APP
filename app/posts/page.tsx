import Link from "next/link";
import { Post } from "@/types";
import { supabase } from "@/utils/supabase/client";
import { DeleteButton } from "@/components/DeleteButton";

export default async function PostsPage() {
  const { data: posts } = await supabase
    .from<"posts", Post>("posts")
    .select("*");
  const countPosts = posts && posts.length | 0;

  return (
    <section className="w-md p-4 sm:p-6 lg:p-8 font-sans">
      <h2 className="m-3 font-semibold text-lg">
        All posts: <b>{countPosts}</b>
      </h2>

      {/* Empty State */}
      {posts?.length === 0 && (
        <div className="text-center py-16 rounded-2xl shadow-sm dark:bg-gray-800">
          <p className="text-slate-400 text-lg font-medium">No posts found</p>
        </div>
      )}

      {/* List of Posts */}
      <ul>
        {posts &&
          posts.map((post: Post, i: number) => (
            <li
              key={post.id}
              className="group my-2 p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex items-start justify-between gap-6 dark:bg-gray-800"
            >
              <Link href={`/posts/${post.id}`}>
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                  {++i}. {post.title}
                </h3>
                <span className="text-sm text-gray-400">{post.body}</span>
              </Link>

              <DeleteButton id={post.id} />
            </li>
          ))}
      </ul>
    </section>
  );
}
