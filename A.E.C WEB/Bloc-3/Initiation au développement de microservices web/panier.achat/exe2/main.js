const fs = require('fs');

function switchLanguage(nouvelleLangue) {
    const cheminConfig = './config.json';

    // Lire le fichier config.json
    const donneesConfig = fs.readFileSync(cheminConfig, 'utf-8');
    const config = JSON.parse(donneesConfig);

    // Changer la langue par défaut
    config.default_language = nouvelleLangue;

    // Sauvegarder le fichier config mis à jour
    fs.writeFileSync(cheminConfig, JSON.stringify(config, null, 2));
    console.log('Langue changée avec succès.');
}

switchLanguage('fr');
