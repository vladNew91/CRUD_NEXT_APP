import { BtcChart, CryptoCard } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const coinsPares = [
  "BTCUSDT",
  "ETHUSDT",
  "XRPUSDT",
  "BCHUSDT",
  "BNBUSDT",
  "DOGEUSDT",
  "ZECUSDT",
  "XMRUSDT",
];

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

      <div className="my-10 flex flex-row flex-wrap gap-3">
        {coinsPares.map((el, i: number) => (
          <Suspense fallback={<span>Loading...</span>} key={i}>
            <CryptoCard pare={el} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
