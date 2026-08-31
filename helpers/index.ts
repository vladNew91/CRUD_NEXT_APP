import { CoinData } from "@/types";

export function getCoinPricePromise(pare: string): Promise<CoinData | null> {
  return fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pare}`)
    .then((res) => {
      if (!res.ok) return null;
      return res.json();
    })
    .catch(() => null);
}
