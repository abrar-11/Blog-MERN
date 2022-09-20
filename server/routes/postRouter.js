import express from "express";
import {
   createPost,
   deletePost,
   getPost,
   getPosts,
   updatePost,
} from "../controllers/postController.js";

const router = express.Router();

// api/v1/posts  All Posts
router.get("/posts", getPosts);

// api/v1/post/:id  Single Post
router.get("/post/:id", getPost);

// api/v1/post/  Create Post
router.post("/posts", createPost);

// api/v1/post/:id  Delete Post
router.delete("/post/:id", deletePost);

// api/v1/post/:id  Update Post
router.put("/post/:id", updatePost);

export default router;
