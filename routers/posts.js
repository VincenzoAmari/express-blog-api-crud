const express = require("express");
const router = express.Router();
const post = [
  {
    id: 1,
    titolo: "Ciambellone",
    contenuto:
      "Un dolce soffice e profumato, perfetto per la colazione o la merenda.",
    immagine: "/img/ciambellone.jpeg",
    tags: ["Dolce", "Colazione", "Merenda"],
  },
  {
    id: 2,
    titolo: "Cracker alla Barbabietola",
    contenuto:
      "Croccanti e dal colore vivace, questi cracker sono ideali come snack o accompagnamento.",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["Snack", "Salato", "Barbabietola"],
  },
  {
    id: 3,
    titolo: "Pane Fritto Dolce",
    contenuto:
      "Una ricetta golosa e semplice, perfetta per riciclare il pane avanzato.",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: ["Dolce", "Fritto", "Riciclo"],
  },
  {
    id: 4,
    titolo: "Pasta alla Barbabietola",
    contenuto:
      "Un primo piatto colorato e saporito, perfetto per sorprendere gli ospiti.",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: ["Pasta", "Primo", "Barbabietola"],
  },
  {
    id: 5,
    titolo: "Torta Paesana",
    contenuto: "Un dolce della tradizione lombarda, ricco di sapori e storia.",
    immagine: "/img/torta_paesana.jpeg",
    tags: ["Dolce", "Tradizione", "Lombardia"],
  },
];

// Rotta per ottenere i post (index)
router.get("/", (req, res) => {
  res.send("Lista dei post");

  res.json(post);
});

// Rotta per ottenere un singolo post (show)
router.get("/:id", (req, res) => {
  res.send(`Dettaglio del post ${req.params.id}`);
});

// Rotta per creare un nuovo post (create)
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// Rotta per aggiornare un post esistente (update)
router.put("/:id", (req, res) => {
  res.send(`Aggiornamento del post ${req.params.id}`);
});

// Rotta per aggiornare parzialmente un post (patch)
router.patch("/:id", (req, res) => {
  res.send(`Aggiornamento parziale del post ${req.params.id}`);
});

// Rotta per cancellare un post (delete)
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router;
