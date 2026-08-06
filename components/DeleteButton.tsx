"use client"

import { deletePost } from "@/actions/actions";

type DeleteButtonProps = {
    id: number,
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
    const handleDelete = () => deletePost(id);

    return (
        <button
            className="w-20
            py-2
            bg-red-600
            text-white
            rounded-lg
            hover:bg-red-700"
            onClick={handleDelete}
        >
            Delete
        </button>
    )
};