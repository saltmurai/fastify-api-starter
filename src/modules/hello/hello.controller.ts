import { FastifyReply, FastifyRequest } from "fastify";
import { HelloResponse } from "./hello.schema";

export async function helloController(
  request: FastifyRequest<{ Body: HelloResponse }>,
  reply: FastifyReply
) {
  request.log.info("info", "Hello, World!");
  return reply.send({ message: "Hello, World!" });
}
