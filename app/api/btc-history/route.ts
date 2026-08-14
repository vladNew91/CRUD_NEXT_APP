import { NextResponse } from "next/server";

// Map UI range -> Binance kline interval + number of candles
const RANGES = {
  "1D": { interval: "15m", limit: 96 }, // 24h in 15m candles
  "1W": { interval: "1h", limit: 168 }, // 7d in 1h candles
  "1M": { interval: "4h", limit: 180 }, // 30d in 4h candles
  "3M": { interval: "12h", limit: 180 }, // 90d in 12h candles
  "1Y": { interval: "1d", limit: 365 }, // 1y in daily candles
} as const;

type RangeKey = keyof typeof RANGES;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rangeParam = (
    searchParams.get("range") ?? "1M"
  ).toUpperCase() as RangeKey;
  const range = RANGES[rangeParam] ? rangeParam : "1M";
  const { interval, limit } = RANGES[range];

  // Binance's public market-data mirror (not geo-restricted like api.binance.com)
  const url = `https://data-api.binance.vision/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=${limit}`;

  try {
    const res = await fetch(url, {
      // Cache on the server for 60s to avoid hammering Binance
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Binance API responded with ${res.status}` },
        { status: 502 },
      );
    }

    // Binance klines: [openTime, open, high, low, close, volume, closeTime, ...]
    const raw: unknown[][] = await res.json();

    const data = raw.map((candle) => ({
      time: Number(candle[0]),
      price: Number(candle[4]), // close price
    }));

    return NextResponse.json({ range, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch data from Binance" },
      { status: 500 },
    );
  }
}
