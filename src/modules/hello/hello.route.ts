import { FastifyInstance } from "fastify";
import { helloController } from "./hello.controller";

export default async function HelloRoute(fastify: FastifyInstance) {
	fastify.get("/hello", helloController);
}
