import { CoinData } from "@/types";

export async function getCoinPricePromise(pare: string) {
  const data = await fetch(
    `https://api.binance.com/api/v3/ticker/24hr?symbol=${pare}`,
  ).then((res) => (res.ok ? res.json() : null));

  return data as CoinData;
}
