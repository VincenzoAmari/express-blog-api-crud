const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  deletePost,
} = require("../controllers/postsController");

// Rotta per ottenere tutti i post
router.get("/", getAllPosts);

// Rotta per ottenere un post tramite id
router.get("/:id", getPostById);

// // Rotta per creare un nuovo post (create)
// router.post("/", (req, res) => {
//   res.send("Creazione di un nuovo post");
// });

// // Rotta per aggiornare un post esistente (update)
// router.put("/:id", (req, res) => {
//   res.send(`Aggiornamento del post ${req.params.id}`);
// });

// // Rotta per aggiornare parzialmente un post (patch)
// router.patch("/:id", (req, res) => {
//   res.send(`Aggiornamento parziale del post ${req.params.id}`);
// });

// Rotta per cancellare un post (delete)
router.delete("/:id", deletePost);

module.exports = router;
