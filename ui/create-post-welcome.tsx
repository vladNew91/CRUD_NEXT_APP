import { auth } from "@/app/(auth)/auth";

export const CreatePostWelcome = async () => {
  const session = await auth();

  return (
    <>
      <h3 className="whitespace-pre-line">
        {!session
          ? "Create post"
          : `Welcome, ${session.user?.name}!\nCreate post.`}
      </h3>
    </>
  );
};
