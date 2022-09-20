import mongoose from "mongoose";

const postSchema = mongoose.Schema({
   title: {
      type: String,
      maxLength: [30, "Title length must not exceed 30 characters"],
      required: [true, "Title is required"],
   },
   author: {
      name: {
         type: String,
         required: [true, "Author Name is required"],
      },
      age: {
         type: Number,
         required: [true, "Age  is required"],
      },
   },
   desc: {
      type: String,
      required: [true, "Description is required"],
   },
   categories: {
      type: [String],
      enum: ["Tech", "Health", "Fitness"],
      required: [true, "Categories is required"],
   },
   likes: {
      type: Number,
      required: true,
      default: 0,
   },
});

const model = new mongoose.model("posts", postSchema);
export default model
