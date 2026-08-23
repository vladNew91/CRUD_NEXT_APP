import { BtcChart } from "@/components/btc-chart";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Safely extract metadata provided by GitHub or email signup
  // const avatarUrl = user?.user_metadata?.avatar_url
  // const fullName = user?.user_metadata?.full_name || 'User'

  if (!user) redirect("/signin");

  return (
    <section style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Welcome, {user.email}</h2>
      <BtcChart />
    </section>
  );
}
