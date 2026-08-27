"use client";

import { useEffect, useState } from "react";
import { CoinData } from "@/types";

interface CryptoCardProps {
  pare: string;
}

export function CryptoCard({ pare }: CryptoCardProps) {
  const [coin, setCoin] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getCoinPrice() {
      try {
        setLoading(true);
        // This request now executes directly from the user's browser IP
        const res = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${pare}`,
        );

        if (!res.ok) {
          setCoin(null);
        } else {
          const data = await res.json();
          setCoin(data);
        }
      } catch (error) {
        console.error("Failed to load coin price:", error);
        setCoin(null);
      } finally {
        setLoading(false);
      }
    }

    getCoinPrice();

    // Optional: Refresh data every 60 seconds automatically on the client side
    const interval = setInterval(getCoinPrice, 60000);
    return () => clearInterval(interval);
  }, [pare]);

  if (loading) {
    return (
      <div
        style={{
          padding: "24px",
          fontFamily: "sans-serif",
          color: "#a1a1a1",
          width: "240px",
        }}
      >
        ⌛ Loading {pare}...
      </div>
    );
  }

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

  const coinPare = `${coin.symbol.slice(0, 3)}/USDT`;
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
        {coinPare}
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
