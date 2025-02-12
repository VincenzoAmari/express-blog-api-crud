const posts = require("../data/posts");

const getAllPosts = (req, res) => {
  res.json(posts);
};

module.exports = { getAllPosts, getPostById, deletePost };
