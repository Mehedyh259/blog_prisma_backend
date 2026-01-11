import express, { Application } from "express";
import cors from "cors";
import { postRouter } from "./modules/post/post.router.js";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/posts",postRouter)



app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

export default app;
