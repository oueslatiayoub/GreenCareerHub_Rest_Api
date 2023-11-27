import express, { Application } from "express";
import confRouter from "./router/conf-router";
import hackRouter from "./router/hack-router";
import todoRouter from "./router/todo-router";
import postRouter from "./router/post-router"

import { Database } from "./database";

const app: Application = express();

app.use(express.json());

app.use("/conf", confRouter);
app.use("/hack", hackRouter);
app.use("/todo", todoRouter);
app.use("/post", postRouter);

databaseInit();

async function databaseInit() {
  await Database.initilize();
  app.listen(8000);
}
