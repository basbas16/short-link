import { Elysia, t } from "elysia";
import { postCreateShort } from "./modules/postShortLink";
import { getHelloElysia } from "./modules/getHelloElysia";
import dotenv from "dotenv";

dotenv.config();

const app = new Elysia()
  .use(getHelloElysia)
  .use(postCreateShort)
  .post("/body", async ({ body }) => {
    console.log(body);
  })
  .post("/", ({ body, query, headers }) => {
    return { body, query, headers };
  })
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
