const express = require("express");
const app = express();
const port = 3000;

// Importiamo il router
const router = require("./routers/posts");
const notFound = require("./middelwares/notFound");
const errorsHandler = require("./middelwares/errorsHandler");

// Middleware
app.use(express.json());

app.use(express.static("public"));

app.use("/api/posts", router);

app.get("/img/:imageName", (req, res) => {
  res.send(`<img src="/public/img/${req.imageName}" alt="Immagine">`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// Middleware per gestire le rotte
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint non trovato" });
});

// Middleware per gestire le rotte non trovate
app.use(notFound);

// Middleware per la gestione degli errori globali
app.use(errorsHandler);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
