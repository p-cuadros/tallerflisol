import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

//const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);
const app = new Elysia()
  .use(swagger())
  .get("/", () => "GET Hello Elysia")
  .post("/hello", () => "POST world")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
