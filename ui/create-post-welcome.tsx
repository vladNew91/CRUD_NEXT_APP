import { createClient } from "@/utils/supabase/server";

export const CreatePostWelcome = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <h3 className="whitespace-pre-line">
        {!user ? "Create post" : `Welcome, ${user.email}!\nCreate post.`}
      </h3>
    </>
  );
};
