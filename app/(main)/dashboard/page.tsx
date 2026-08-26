import { BtcChart, CryptoCard } from "@/components";
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
      <h1 className="my-4 text-2xl">Welcome, {user?.email}</h1>
      <BtcChart />

      <div className="my-10 flex flex-row flex-wrap gap-3">
        <CryptoCard pare="BTCUSDT" />
        <CryptoCard pare="ETHUSDT" />
        <CryptoCard pare="XRPUSDT" />
        <CryptoCard pare="BCHUSDT" />
        <CryptoCard pare="BNBUSDT" />
        <CryptoCard pare="DOGEUSDT" />
        <CryptoCard pare="ZECUSDT" />
        <CryptoCard pare="XMRUSDT" />
      </div>
    </section>
  );
}
