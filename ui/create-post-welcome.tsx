import { auth } from "@/app/(auth)/auth";

export const CreatePostWelcome = async () => {
  const session = await auth();
  return (
    <h3>
      {!session ? "Create post" : `Welcome, ${session.user?.name} create post!`}
    </h3>
  );
};
