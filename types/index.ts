export type Post = {
  id: number;
  title: string;
  body?: string;
};

export interface UserSession {
  name: string;
  email: string;
  image?: string;
  role: string;
}
