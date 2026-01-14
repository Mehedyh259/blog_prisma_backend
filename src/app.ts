import express, { Application } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { postRouter } from "./modules/post/post.router";

const app: Application = express();
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

export default app;
