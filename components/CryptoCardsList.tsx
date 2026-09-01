import { Suspense } from "react";
import { CryptoCard, CryptoCardSkeleton } from "@/components";

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

export const CryptoCardsList = () => {
  return (
    <div className="my-10 flex flex-row flex-wrap gap-3">
      {coinsPares.map((coinPare, i) => (
        <Suspense key={i} fallback={<CryptoCardSkeleton />}>
          <CryptoCard coinPare={coinPare} />
        </Suspense>
      ))}
    </div>
  );
};
