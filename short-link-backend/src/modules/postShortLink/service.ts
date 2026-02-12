import { status } from "elysia";
import { UrlModel } from "./model";

export abstract class ShortLink {
  static async postShortLink(link: UrlModel.bodyReq) {
    console.log(link);
    // const res = link.req_link;
    //
    //
    return {
      res_link: link.req_link,
    };
  }
}
