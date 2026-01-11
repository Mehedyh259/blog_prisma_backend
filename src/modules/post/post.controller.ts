import { Request, Response } from "express";
import { PostService } from "./post.service.js";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({
      error: "Post creation failed",
      details: error,
    });
  }
};

const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPosts();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch posts",
      details: error,
    });
  }
};

export const PostController = {
  createPost,
  getAllPosts,
};

