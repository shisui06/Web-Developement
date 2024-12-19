import { app } from './app.js';

const PORT = process.env.PORT || 3000; // Utilisation du port défini dans les variables d'environnement, sinon 3000

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
