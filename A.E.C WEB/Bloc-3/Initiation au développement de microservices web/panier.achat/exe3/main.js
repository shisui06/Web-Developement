const flags = require('country-flags');

function getFlagUrl(codePays) {
    const flag = flags.get(codePays);
    if (flag) {
        console.log(`URL du drapeau pour ${codePays} : ${flag.image}`);
    } else {
        console.log('Drapeau non trouvé.');
    }
}

getFlagUrl('FR'); // Exemple : Affiche le drapeau de la France
