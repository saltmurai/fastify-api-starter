import UserRoute from "./hello/hello.route";
import { helloSchemas } from "./hello/hello.schema";

const routes = [UserRoute];

const schemas = [...helloSchemas]

export { routes, schemas };