import { CoinData } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.freecryptoapi.com/v1/getData?symbol=ETH",
      {
        cache: "no-store",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_SECRET_FREECRYPTOAPI_KEY}`,
        },
      },
    );

    const rawText = await response.text();

    if (!response.ok) {
      console.error(`Status: ${response.status}. Body: ${rawText}`);
      return NextResponse.json({ status: response.status });
    }

    const data = JSON.parse(rawText) as CoinData;
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
