export type Post = {
  id: number;
  title: string;
  body?: string;
};

export type CoinInfo = {
  symbol: string;
  last: string;
  last_btc: string;
  lowest: string;
  highest: string;
  date: string;
  daily_change_percentage: string;
  source_exchange: string;
};

export type CoinData = {
  status: string;
  symbols: CoinInfo[];
};
