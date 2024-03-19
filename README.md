# Minimal Starter Repo for Fastify API with Typescript

- Fastify with Typescript
- Kysely with kysely-codegen
- Prettier for code formatting
- zod for schema validation

Folder structure

```
- src
	- db: database configuration
	- plugins: contains all the plugins/middlewares...
	- modules: contains all the modules/models
		- user: user module
			- hello.controller.ts: user controller
			- hello.schema.ts: user model
			- hello.service.ts: user service
			- hello.routes.ts: user routes
		- ...
		- index.ts: export all modules
	- app.ts: main app file
	- server.ts: server file
```

### Development

```bash
# Required: typescript watch compilation
$ npm run watch

# Required: development server with hot reload (nodemon)
$ npm run dev

# Format with prettier
$ npm run format
```

### Database operations

```
npm run generate
```

to automatically generate database schema in Typescript

### Production

```bash
# build for production
$ npm run build

# start production app
$ npm run start
```
