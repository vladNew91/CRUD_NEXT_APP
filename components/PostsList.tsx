import Link from "next/link";
import { Post } from "@/types";
import { DeleteButton } from "@/components/DeleteButton";
import { cookies } from "next/headers";
import { cn } from "@/lib/utils";

type PostsListProps = {
  posts: Post[];
};

export default async function PostsList({ posts }: PostsListProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  console.log(token);

  return (
    <ul>
      {posts &&
        posts.map((post, i: number) => (
          <li
            key={post.id}
            className={cn(
              "group my-2 flex items-start justify-between gap-6 rounded-2xl",
              "p-3 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800",
            )}
          >
            <Link href={`/posts/${post.id}`}>
              <h3 className="text-xl font-bold transition-colors group-hover:text-blue-600">
                {++i}. {post.title}
              </h3>
              <span className="text-sm text-gray-400">{post.body}</span>
            </Link>

            <DeleteButton id={post.id} />
          </li>
        ))}
    </ul>
  );
}
