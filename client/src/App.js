import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./features/PostSlice";

const App = () => {
   const dispatch = useDispatch();

   const posts = useSelector((states) => states.PostReducer.posts);
   const isLoading = useSelector((states) => states.PostReducer.isLoading);

   useEffect(() => {
      dispatch(getAllPosts());
   }, []);

   return (
      <>
         {" "}
         {isLoading && <h1>Ruko zara sabar kro.. dhakka mukki nhi</h1>}
         {posts.map((post) => {
            return <p>{post.title}</p>;
         })}
      </>
   );
};

export default App;
