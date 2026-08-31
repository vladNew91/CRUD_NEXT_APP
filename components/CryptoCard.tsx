import { CoinData } from "@/types";

interface CryptoCardProps {
  coin: CoinData | null;
}

export function CryptoCard({ coin }: CryptoCardProps) {
  if (!coin) {
    return (
      <p
        style={{
          padding: "24px",
          fontFamily: "sans-serif",
          color: "red",
          width: "240px",
        }}
      >
        ⚠️ Error loading Coin data
      </p>
    );
  }

  const getCoinPare = `${coin.symbol.slice(0, 3)}/USDT`;
  const isPositive = parseFloat(coin.priceChangePercent) >= 0;
  const formattedPrice = parseFloat(coin.lastPrice).toLocaleString();

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 10px 15px -3px #4a4a4ac4",
        backgroundColor: "#f4f0f006",
        fontFamily: "sans-serif",
        width: "240px",
      }}
    >
      <h3
        style={{
          margin: "0 0 6px 0",
          color: "#a1a1a1",
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        {getCoinPare}
      </h3>

      <p className="text-xl">${formattedPrice}</p>

      <span
        style={{
          color: isPositive ? "#16a34a" : "#dc2626",
          fontWeight: "700",
          fontSize: "14px",
          padding: "6px 10px",
          borderRadius: "8px",
          display: "inline-block",
        }}
      >
        {isPositive ? "▲" : "▼"}{" "}
        {Math.abs(parseFloat(coin.priceChangePercent)).toFixed(2)}%
      </span>
    </div>
  );
}
