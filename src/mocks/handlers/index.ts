import { authHandlers } from "./auth";
// import { postHandlers } from "./post"; (나중에 추가)

export const handlers = [
  ...authHandlers,
  // ...postHandlers,
];
