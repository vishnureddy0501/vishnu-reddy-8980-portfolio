import { createClient } from "redis";

let client;

export async function createRedisClient() {
	const host = process.env.REDIS_HOST;
	const port = process.env.REDIS_PORT;
	const pass = process.env.REDIS_PASS;
  
	if (!host || !port || !pass) {
	  console.warn("Redis env vars not set; skipping redis connection");
	  return null;
	}
	client = createClient({
		username: 'default',
		password: pass,
		socket: {
			host,
			port: Number(port)
		}
	});
	client.on("error", (err) => console.error("Redis Client Error", err));
	await client.connect();
	console.log("Redis connected");
	return client;
}

export function getRedisClient() {
	if (!client) throw new Error("Redis not initialized");
	return client;
}
