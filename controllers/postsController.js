const posts = require("../data/posts");

const getAllPosts = (req, res) => {
  res.json(posts);
};

const getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  res.json(post);
};

module.exports = { getAllPosts, getPostById, deletePost };
