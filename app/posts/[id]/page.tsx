import { notFound } from "next/navigation";

type Post = {
    id: number,
    title: string,
    body?: string,
};

type PostPageProps = {
    params: Promise<{ id: number }>
};

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await result.json();

    if (!id) {
        notFound();
    }

    if (!result.ok) {
        throw new Error('Failed to fetch data from server');
    }

    return (
        <>
            <h1 className="text-center m-3">{post.title}</h1>
            <span>{post.body}</span>
        </>
    );
}
