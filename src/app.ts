import { Elysia, t } from "elysia";
import { client } from "./clients/client";
import { postCreateShort } from "./modules/postShortLink";

const app = new Elysia()
  .use(postCreateShort)
  .post(
    "/body",
    async ({ body }) => {
      console.log(body);
    },
    // {
    //   body: t.Object({
    //     // name: t.String(),
    //   }),
    // },
  )
  .post("/", ({ body, query, headers }) => {
    return { body, query, headers };
  })

  // .onBeforeHandle(({ body, status }) => {
  //   if (!body.name) {
  //     return status(401);
  //   }
  // })
  .post(
    "/createshortlink",
    async ({ body }) => {
      // return `Hello ${name}!`
      console.log(body.name);
      // return body
      // await client.set("hello", name);
      // const result = await client.get("hello");
      return body;
    },
    {
      body: t.Object({
        name: t.String(),
      }),
    },
  )
  .get("/hello/:name?", async ({ params: { name } }) => {
    console.log(name);
    return name;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
