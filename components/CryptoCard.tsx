"use client";

import { use, useMemo } from "react";
import { cn } from "@/utils/utils";
import { getCoinPricePromise } from "@/helpers";

interface CryptoCardProps {
  coinPare: string;
}

export function CryptoCard({ coinPare }: CryptoCardProps) {
  const coinPricePromise = useMemo(() => {
    return getCoinPricePromise(coinPare);
  }, [coinPare]);

  const coin = use(coinPricePromise);

  const getCoinPare = `${coin.symbol.slice(0, 3)}/USDT`;
  const isPositive = parseFloat(coin.priceChangePercent) >= 0;
  const formattedPrice = parseFloat(coin.lastPrice).toLocaleString();

  return (
    <div
      className={cn(
        "rounded-2xl bg-[#f4f0f006] p-6 font-sans",
        "w-[240px] shadow-[0_10px_15px_-3px_#4a4a4ac4]",
      )}
    >
      <h3 className="mb-[6px] text-sm font-semibold tracking-[0.5px] text-[#a1a1a1]">
        {getCoinPare}
      </h3>

      <p className="text-xl">${formattedPrice}</p>

      <span
        className={cn(
          `inline-block rounded-lg px-2.5 py-1.5 text-sm font-bold`,
          `${isPositive ? "text-green-600" : "text-red-600"}`,
        )}
      >
        {isPositive ? "▲" : "▼"}{" "}
        {Math.abs(parseFloat(coin.priceChangePercent)).toFixed(2)}%
      </span>
    </div>
  );
}
