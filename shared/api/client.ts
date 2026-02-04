export const fetchClient = async (url: string, options: RequestInit) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, options);
  if (!res.ok) throw new Error("API Error");
  return res.json();
};
