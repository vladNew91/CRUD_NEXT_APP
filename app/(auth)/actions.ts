"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// AUTH
export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/signin?error=Could not authenticate user");
  }

  revalidatePath("/", "layout");
  return redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  if (
    data?.user &&
    (!data.user.identities || data.user.identities.length === 0)
  ) {
    return redirect(
      `/signup?error=${encodeURIComponent(
        "An account with this email already exists. Please log in using your original provider (e.g., GitHub).",
      )}`,
    );
  }

  return redirect("/signin?message=Check your email to confirm registration");
}

export async function signout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (!error) {
    revalidatePath("/", "layout");
  }

  return;
}

export async function loginWithGitHub() {
  const supabase = await createClient();

  // Request the GitHub login URL from Supabase Auth
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      // Points back to your Route Handler created in the earlier step
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/dashboard`,
    },
  });

  if (error) {
    return redirect("/signin?error=GitHub authentication failed");
  }

  // Redirect the user directly to GitHub's consent screen
  if (data.url) {
    return redirect(data.url);
  }
}
