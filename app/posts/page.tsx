import Link from "next/link";

type Post = {
    id: number,
    title: string,
    body?: string,
};

export default async function PostsPage() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await result.json() as Post[];

    if (!result.ok) {
        throw new Error('Failed to fetch data from server');
    }

    return (
        <>
            <h1 className="text-center m-3">Posts</h1>
            <ul>
                {posts.map(post => <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>)}
            </ul>
        </>
    );
}
