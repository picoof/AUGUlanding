const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Indique le dossier public (ici, le dossier courant)
app.use(express.static(__dirname));

// Route par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
