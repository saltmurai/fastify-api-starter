import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { checkConnection } from "./db/database";
import cors from "@fastify/cors";
import { routes, schemas } from "./modules/index";

const server = fastify({
  logger: true,
  connectionTimeout: 10000,
});

server.register(cors);

server.addHook("onReady", async function () {
  try {
    await checkConnection();
    console.log("Application is ready");
  } catch (error) {
    console.error("Error during onReady hook", error);
    process.exit(1);
  }
});

server.addHook("onRequest", (request, _reply, done) => {
  const timestamp = new Date().toISOString();
  console.log(
    `[${timestamp}] Received ${request.method} request on ${request.url}`
  );
  done();
});

// add all schemas
schemas.forEach((schema) => {
  server.addSchema(schema);
});

const swaggerOptions = {
  swagger: {
    info: {
      title: "Fastify starter template",
      description: "Fastify starter template with Swagger",
      version: "1.0.0",
    },
    host: "localhost",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};
const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
server.register(fastifySwagger, swaggerOptions);
server.register(fastifySwaggerUi, swaggerUiOptions);

// Register all routes
routes.forEach((route) => {
  server.register(route, {});
});

export default server;
