import { defineConfig } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const config = defineConfig<PostgreSqlDriver>({
	dbName: process.env.POSTGRES_DB,
	driver: PostgreSqlDriver,
	entities: ["./src/database/entities/*"],
	entitiesTs: ["./src/database/entities/**/*.ts"],
	port: Number(process.env.POSTGRES_DATABASE_PORT),
	host: process.env.POSTGRES_HOST,
	password: process.env.POSTGRES_USER,
	migrations: {
		fileName(timestamp, name) {
			return `Migration_${timestamp}${name ? `_${name}` : ""}`;
		},
	},
});

export default config;
