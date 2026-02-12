import { Elysia } from "elysia";

export const getHelloElysia = new Elysia({}).get(
  "/getHelloElysia",
  async () => {
    const response = { message: "Hello Elysia!!" };
    return response;
  },
);
