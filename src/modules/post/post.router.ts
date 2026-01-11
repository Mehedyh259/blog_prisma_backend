import express, { Router } from "express"
import { PostController } from "./post.controller.js";

const router:Router = express.Router()


router.get("/",PostController.getAllPosts)
router.post("/create",PostController.createPost)




export const postRouter:Router = router;