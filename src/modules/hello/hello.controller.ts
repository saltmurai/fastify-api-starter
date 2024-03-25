import { FastifyReply, FastifyRequest } from "fastify";
import { HelloResponse } from "./hello.schema";

export async function helloController(
  _request: FastifyRequest<{ Body: HelloResponse }>,
  reply: FastifyReply
) {
  return reply.send({ message: "Hello, World!" });
}
