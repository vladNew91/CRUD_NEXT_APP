"use client";

import useSWR from "swr";
import { CoinData } from "@/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CryptoCoin() {
  const { data, error, isLoading } = useSWR<CoinData>("/api/ticker", fetcher);

  if (error) return <div className="text-red-500">Failed to load ticker.</div>;
  if (isLoading) return <div>Loading real-time prices...</div>;
  if (!data || !data.symbols || data.symbols.length === 0) {
    return <div>No active tickers found.</div>;
  }

  const coin = data.symbols[0];
  const isNegative = coin.daily_change_percentage.startsWith("-");
  const changePercent = parseFloat(coin.daily_change_percentage).toFixed(2);

  return (
    <div className="group relative mx-auto w-full">
      <div
        className={`absolute -inset-0.5 rounded-2xl opacity-10 blur-xl transition duration-500 group-hover:opacity-20 ${
          isNegative ? "bg-red-500" : "bg-emerald-500"
        }`}
      />

      <div className="relative rounded-2xl bg-[#171717] p-5 shadow-2xl transition-all duration-300 hover:border-zinc-800">
        {/* Header Row: Symbol & Change Badge */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-3xl font-black tracking-tight text-zinc-100">
              {coin.symbol}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
              / USD
            </span>
          </div>

          <span
            className={`rounded-lg border px-2.5 py-1 font-mono text-xs font-bold ${
              isNegative
                ? "border-red-500/10 bg-red-500/5 text-red-400"
                : "border-emerald-500/10 bg-emerald-500/5 text-emerald-400"
            }`}
          >
            {isNegative ? "" : "+"}
            {changePercent}%
          </span>
        </div>

        {/* Spot Pricing Core */}
        <div className="mb-4">
          <div className="font-mono text-3xl font-bold tracking-tight text-white">
            $
            {parseFloat(coin.last).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </div>
          <div className="mt-1 flex items-center gap-1 font-mono text-[11px] text-zinc-500">
            <span>{parseFloat(coin.last_btc).toFixed(5)} BTC</span>
            <span className="text-zinc-700">•</span>
            <span className="text-[10px] text-zinc-600 capitalize">
              {coin.source_exchange} feed
            </span>
          </div>
        </div>

        {/* High/Low Progress Indicator Graphic Divider */}
        <div className="mb-4 flex h-1.5 w-full overflow-hidden rounded-full bg-zinc-900">
          <div className="h-full w-1/3 bg-zinc-800" />
          <div
            className={`h-full w-2/5 rounded-full ${isNegative ? "bg-red-500/40" : "bg-emerald-500/40"}`}
          />
        </div>

        {/* Bottom Metadata Matrix */}
        <div className="grid grid-cols-2 gap-4 border-t border-zinc-900 pt-1 font-mono text-xs">
          <div>
            <span className="mb-0.5 block text-[10px] tracking-wider text-zinc-600 uppercase">
              24h Low
            </span>
            <span className="font-medium text-zinc-400">
              ${parseFloat(coin.lowest).toFixed(2)}
            </span>
          </div>
          <div className="text-right">
            <span className="mb-0.5 block text-[10px] tracking-wider text-zinc-600 uppercase">
              24h High
            </span>
            <span className="font-medium text-zinc-400">
              ${parseFloat(coin.highest).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Subtle Timestamp Footer */}
        <div className="mt-4 border-t border-zinc-900/40 pt-2 text-center">
          <span className="font-mono text-[9px] text-zinc-600">
            Synced: {coin.date}
          </span>
        </div>
      </div>
    </div>
  );
}
