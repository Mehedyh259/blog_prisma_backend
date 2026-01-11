import { prisma } from "../../lib/prisma.js";
import { Post } from "./../../../generated/prisma/client";

const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAt">
) => {
  const result = await prisma.post.create({
    data,
  });

  return result;
};

const getAllPosts = async () => {
  const result = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

export const PostService = {
  createPost,
  getAllPosts,
};
