import { auth } from "@/app/(auth)/auth";
import { BtcChart } from "@/components/btc-chart";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <section style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <BtcChart />
    </section>
  );
}
