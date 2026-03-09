import { http, HttpResponse } from "msw";

export const postsHandlers = [
  http.get("http://localhost:4000/posts", () => {
    return HttpResponse.json([]);
  }),
];
