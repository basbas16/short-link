import { t } from "elysia";

export namespace UrlModel {
  export const bodyInvalid = t.Literal("Link cannot be empty");
  export type bodyInvalid = typeof bodyInvalid.static;

  export const bodyReq = t.Object({
    req_link: t.String({
      error: "Link cannot be empty",
    }),
  });
  export type bodyReq = typeof bodyReq.static;

  export const BodyRes = t.Object({
    res_link: t.String(),
  });
  export type BodyRes = typeof bodyReq.static;
}
