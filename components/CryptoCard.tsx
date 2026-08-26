import { CoinData } from "@/types";

async function getCoinPrice({
  pare,
}: {
  pare: string;
}): Promise<CoinData | null> {
  try {
    const res = await fetch(
      `https://api.binance.com/api/v3/ticker/24hr?symbol=${pare}`,
      {
        method: "GET",
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to load BTC price:", error);
    return null;
  }
}

interface CryptoCardProps {
  pare: string;
}

export async function CryptoCard({ pare }: CryptoCardProps) {
  const coin = await getCoinPrice({ pare: pare });
  const getCoinPare = coin?.symbol.slice(0, 3);

  if (!coin) {
    return (
      <p style={{ padding: "24px", fontFamily: "sans-serif", color: "red" }}>
        ⚠️ Error loading Coin data
      </p>
    );
  }

  const isPositive = parseFloat(coin.priceChangePercent) >= 0;
  const formattedPrice = parseFloat(coin.lastPrice).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

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
        {getCoinPare}/USDT
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
