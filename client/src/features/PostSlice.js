import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
   posts: [],
   isLoading: false,
};

// Get All Posts
export const getAllPosts = createAsyncThunk("posts/GetAllPosts", async () => {
   console.log("response: ");
   const { data } = await axios.get("http://localhost:4000/api/v1/posts");
   return data;
   //    console.log("response: ", {data});
});

const PostSlice = createSlice({
   name: "postStore",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllPosts.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getAllPosts.fulfilled, (state, action) => {
         state.isLoading = false;
         state.posts = action.payload.data;
      });
   },
});

export default PostSlice.reducer;
