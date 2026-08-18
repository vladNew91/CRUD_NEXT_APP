"use server";

import { supabase } from "@/lib/supabase/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await supabase.from("posts").insert({ title: title, body: body });
  revalidatePath("posts");
}

export async function updatePost(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await supabase
    .from("posts")
    .update({ title: title, body: body })
    .eq("id", +id);
  revalidatePath("posts");
  revalidatePath(`posts/${id}`);
}

export async function deletePost(id: number) {
  await supabase.from("posts").delete().eq("id", id);
  revalidatePath("posts");
}

export async function handleSignUp(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/dashboard`,
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/");

  redirect("/dashboard");
}
