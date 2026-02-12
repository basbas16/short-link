import { Elysia } from "elysia";
import { UrlModel } from "./model";
import { ShortLink } from "./service";

export const postCreateShort = new Elysia({}).post(
  "/postShortLink",
  async ({ body }) => {
    const response = await ShortLink.postShortLink(body);
    return response;
  },
  {
    body: UrlModel.bodyReq,
    response: {
      200: UrlModel.BodyRes,
      422: UrlModel.bodyInvalid,
    },
  },
);
