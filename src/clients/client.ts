import { RedisClient } from "bun";
import { Config } from "../clients/client";

export const client = new RedisClient(
  `redis://default:${Config}@redis-15484.crce194.ap-seast-1-1.ec2.cloud.redislabs.com:15484`,
);
