import { setup } from 'axios-cache-adapter';

export const api = setup({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  cache: {
    maxAge: 1 * 60 * 1000, // 1 minute
  },
  withCredentials: true, // send cookies
});
