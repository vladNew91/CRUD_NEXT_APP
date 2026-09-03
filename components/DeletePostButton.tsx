"use client";

import { deletePost } from "@/app/(main)/posts/actions";

type DeleteButtonProps = {
  id: number;
};

export const DeletePostButton = ({ id }: DeleteButtonProps) => {
  const handleDelete = () => deletePost(id);

  return (
    <button
      onClick={handleDelete}
      className="min-w-20 rounded-lg bg-red-600 p-1 text-white hover:bg-red-700"
    >
      Delete
    </button>
  );
};
