import { redirect } from "next/navigation";
import { BtcChart } from "@/components";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/signin");

  return (
    <section className="w-full p-3">
      <h1 className="my-4 text-2xl font-semibold">Welcome, {user.email}</h1>

      <BtcChart />
    </section>
  );
}
