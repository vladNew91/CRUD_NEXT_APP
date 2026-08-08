"use client";

import { deletePost } from "@/actions/actions";

type DeleteButtonProps = {
  id: number;
};

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const handleDelete = () => deletePost(id);

  return (
    <button
      onClick={handleDelete}
      className="
        min-w-20
        p-1
        bg-red-600
        text-white
        rounded-lg
        hover:bg-red-700"
    >
      Delete
    </button>
  );
};
