const fs = require('fs');

function switchLanguage(nouvelleLangue) {
    const cheminConfig = './config.json';

    
    const donneesConfig = fs.readFileSync(cheminConfig, 'utf-8');
    const config = JSON.parse(donneesConfig);

    
    config.default_language = nouvelleLangue;

    
    fs.writeFileSync(cheminConfig, JSON.stringify(config, null, 2));
    console.log('Langue changée avec succès.');
}

switchLanguage('fr');
