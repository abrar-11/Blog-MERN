import mongoose from "mongoose";
import Posts from "../models/Posts.js";

const getPosts = async (req, res) => {
   try {
      const posts = await Posts.find();
      res.status(200).json({ success: true, data: posts });
   } catch (error) {
      res.status(500).json({ success: false, error: error });
   }
};

const getPost = (req, res) => {
    console.log("checking");
   res.status(200).json({ success: true, data: "Get Get Post" });
};

const createPost = async (req, res) => {
   try {
      const postData = req.body;
      console.log(postData);
      if (postData) {
         const newPost = new Posts(postData);
         await newPost.save();

         res.status(200).json({ success: true, data: newPost });
      }
   } catch (error) {
      res.status(500).json({ success: false, error: error.message });
   }
};

const updatePost = async (req, res) => {
   try {
      const postData = req.body;
      const id = req.params.id;
      console.log(postData && id);

      if (!(id && mongoose.isValidObjectId(id)))
         return res
            .status(500)
            .json({ success: false, error: "Not a valid Id" });

      const getPost = await Posts.findById(id);

      if (!getPost)
         return res
            .status(500)
            .json({ success: false, error: "Id Not found.." });

      const newPost = await Posts.findByIdAndUpdate(id, postData, {
         runValidators: true,
         new: true,
      });

      res.status(200).json({ success: true, data: newPost });
   } catch (error) {
      res.status(500).json({ success: false, error: error.message });
   }
};
const deletePost = (req, res) => {
   res.status(200).json({ success: true, data: "Get Delete Posts" });
};

export { getPosts, getPost, createPost, updatePost, deletePost };
