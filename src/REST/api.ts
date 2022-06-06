import { fetcher } from './fetcher';

export const Api = {
  get: (endpoint: string | null, body?: any) => fetcher(endpoint, 'GET', body),
};
