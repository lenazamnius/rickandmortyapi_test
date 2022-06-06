export const fetcher = async (
  endpoint: string | null,
  method: string,
  body: any,
) => {
  return fetch(`${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
};
