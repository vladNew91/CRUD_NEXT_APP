import { getCoinPricePromise } from "@/helpers";
import { CryptoCard } from "@/components";

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

export const CryptoCardsList = async () => {
  const coinsData = await Promise.all(
    coinsPares.map((el) => getCoinPricePromise(el)),
  );

  return (
    <div className="my-10 flex flex-row flex-wrap gap-3">
      {coinsData.map((coin, i) => {
        if (!coin) return <div key={i}>Error loading data</div>;

        return <CryptoCard coin={coin} key={coin.symbol || i} />;
      })}
    </div>
  );
};
