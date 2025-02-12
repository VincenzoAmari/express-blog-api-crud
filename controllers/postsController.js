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

const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  posts.splice(index, 1);
  console.log("Lista aggiornata:", posts);
  res.status(204).send();
};

module.exports = { getAllPosts, getPostById, deletePost };
