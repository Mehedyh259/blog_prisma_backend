import express, { Application } from "express";
import cors from "cors";
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.all("/api/auth", toNodeHandler(auth));



app.use("/posts",postRouter)



app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

export default app;
