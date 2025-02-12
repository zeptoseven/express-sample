import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import createError from "http-errors";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    session({
      secret: "AustinDecosta",
      resave: false, // don't save session if unmodified
      saveUninitialized: false, // don't create session until something stored
    })
  );
  app.use(
    cors({
      origin: "*",
      methods: "GET,POST,PUT,DELETE",
      credentials: true, // For cookie authentication
    })
  );
  app.use(passport.authenticate("session"));

  app.use("/api/v1/user", userRouter);

  // 404 error
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // Global Catch -  Error Middleware
  app.use(function (err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  return app;
}
