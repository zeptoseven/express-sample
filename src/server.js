import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

  app.use("/api/v1/user", userRouter);

  return app;
}
