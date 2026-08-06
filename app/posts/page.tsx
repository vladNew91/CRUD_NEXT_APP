import Link from "next/link";
import { Post } from "@/types";
import { supabase } from '@/utils/supabase/client';
import { createPost } from "@/actions/actions";
import { DeleteButton } from "@/components/DeleteButton";

export default async function PostsPage() {
    const { data: posts } = await supabase.from<'posts', Post>('posts').select('*');
    const countPosts = posts && posts.length | 0;

    return (
        <>
            <h1 className="m-3">All posts: {countPosts}</h1>
            <ul className="m-3">
                {posts && posts.map((post: Post, i: number) => (
                    <li className="max-w-md" key={post.id}>
                        <div className="flex justify-between">
                            <Link href={`/posts/${post.id}`}>
                                {++i}: {post.title}
                            </Link>

                            <DeleteButton id={post.id} />
                        </div>
                    </li>
                ))}
            </ul>

            <div className="max-w-md p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <form className="space-y-4" action={createPost}>
                    <h3>Create post</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input type="text" id="title" name="title" className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                        <input type="text" id="body" name="body" className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white" required />
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
                </form>
            </div>
        </>
    );
}
