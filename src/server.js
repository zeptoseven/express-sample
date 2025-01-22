import express from "express";
import routes from "./routes/index.js";
import mongoose from "./config/db.js";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(routes);

  return app;
}
