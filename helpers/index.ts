import { CoinData } from "@/types";

export function getCoinPricePromise(pare: string): Promise<CoinData | null> {
  "use client";
  return fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pare}`, {
    next: { revalidate: 10 }, // Optional caching
  })
    .then((res) => res.json())
    .catch(() => null);
}
