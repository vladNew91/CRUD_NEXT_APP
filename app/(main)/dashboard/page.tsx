export const dynamic = "force-dynamic"; // stop Vercel build errors

import { BtcChart, CryptoCardsList } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/signin");

  return (
    <section className="w-full px-3">
      <h1 className="my-4 text-2xl">Welcome, {user.email}</h1>
      <BtcChart />

      <CryptoCardsList />
    </section>
  );
}
