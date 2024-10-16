const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Main.html'));
});

app.get('/emplois', (req, res) => {
  fs.readFile('emplois.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur de lecture du fichier JSON');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(81, () => {
  console.log('Serveur démarré sur http://localhost:81');
});
