export type Post = {
  id: number;
  title: string;
  body?: string;
};

export interface CoinData {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}
