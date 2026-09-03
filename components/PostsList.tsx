import Link from "next/link";
import { Post } from "@/types";
import { cn } from "@/utils/utils";
import { DeletePostButton } from "@/components/DeletePostButton";

type PostsListProps = {
  posts: Post[];
};

export default async function PostsList({ posts }: PostsListProps) {
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

            <DeletePostButton id={post.id} />
          </li>
        ))}
    </ul>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
