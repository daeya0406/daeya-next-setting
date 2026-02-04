const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: { "Content-Type": "application/json", ...options?.headers },
    });
    if (!res.ok) throw new Error("API_ERROR");
    return res.json();
  },

  get: <T>(url: string) => api.fetch<T>(url, { method: "GET" }),
  post: <T>(url: string, body: any) =>
    api.fetch<T>(url, { method: "POST", body: JSON.stringify(body) }),
  patch: <T>(url: string, body: any) =>
    api.fetch<T>(url, { method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(url: string) => api.fetch<T>(url, { method: "DELETE" }),
};
