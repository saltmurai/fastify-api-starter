import app from "./app";

const FASTIFY_PORT = Number(process.env.PORT) || 8080;

const start = async () => {
	try {
		await app.listen({ port: FASTIFY_PORT, host: "0.0.0.0" });
		console.log("Server is listening on port: " + FASTIFY_PORT);
	} catch (error) {
		console.error("Error starting the server", error);
		process.exit(1);
	}
};

start();
