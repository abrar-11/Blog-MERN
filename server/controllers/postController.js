const getPosts = (req, res) => {
   res.status(200).json({ success: true, data: "Get ALl Posts" });
};

const getPost = (req, res) => {
   res.status(200).json({ success: true, data: "Get Get Post" });
};

const createPost = (req, res) => {
   res.status(200).json({ success: true, data: "Get Create Posts" });
};

const updatePost = (req, res) => {
   res.status(200).json({ success: true, data: "Get Update Posts" });
};
const deletePost = (req, res) => {
   res.status(200).json({ success: true, data: "Get Delete Posts" });
};

export { getPosts, getPost, createPost, updatePost, deletePost };
