import Redis from "ioredis";
import { env } from "~/env.mjs";

// export const connection = new Redis({
//   host: env.REDIS_URL,
//   port: env.REDIS_PORT,
//   username: env.REDIS_USER,
//   password: env.REDIS_PASSWORD,
//   // tls: {},
//   enableTLSForSentinelMode: false,
//   maxRetriesPerRequest: null,
// });

export const connection = new Redis(env.REDIS_URL, {maxRetriesPerRequest: null});
