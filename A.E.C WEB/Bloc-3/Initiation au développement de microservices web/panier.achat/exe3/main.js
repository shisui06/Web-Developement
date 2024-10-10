const { findFlagUrlByCountryName, findFlagUrlByIso2Code } = require('country-flags-svg');


const flagUrlByCountryName = findFlagUrlByCountryName("spain");
console.log(`URL du drapeau de la Canada : ${flagUrlByCountryName}`);


const flagUrlByIso2Code = findFlagUrlByIso2Code("es");
console.log(`URL du drapeau pour le code ca : ${flagUrlByIso2Code}`);


