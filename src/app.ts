import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { checkConnection } from "./db/database";
import cors from "@fastify/cors";
import { routes } from "./modules/index";

const app = fastify({
  logger: true,
  connectionTimeout: 10000,
});

app.register(cors);

app.addHook("onReady", async function () {
  try {
    await checkConnection();
    console.log("Application is ready");
  } catch (error) {
    console.error("Error during onReady hook", error);
    process.exit(1);
  }
});

app.addHook("onRequest", (request, _reply, done) => {
  const timestamp = new Date().toISOString();
  console.log(
    `[${timestamp}] Received ${request.method} request on ${request.url}`
  );
  done();
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
app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

// Register all routes
routes.forEach((route) => {
  app.register(route, {});
});

export default app;
