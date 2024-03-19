import { Kysely, PostgresDialect } from "kysely";
import { DB } from "./db";
import { Pool } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool,
	}),
});

export const checkConnection = async () => {
	const client = await pool.connect();
	try {
		console.log("Connected to the database");
		client.release();
	} catch (error: any) {
		console.error("Error connecting to the database:", error.message);
	}
};
