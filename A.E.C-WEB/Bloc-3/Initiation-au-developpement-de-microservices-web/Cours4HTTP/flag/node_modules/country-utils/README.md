# Country Utils
A node modules that get country information from given string.

## Installation
```ssh
$ npm install --save country-utils
```

## Usage
```javascript

const lookup = require("country-utils");

// Object method
const country = lookup("france");
country.similar(); 
/*
{
    "continent": "Europe",
    "region": "Western Europe",
    "country": "France",
    "capital": "Paris",
    "fips": "FR",
    "iso2": "FR",
    "iso3": "FRA",
    "isoNo": "250",
    "internet": "FR",
    "timezone": [
        "Europe/Paris"
    ]
}
*/
const country2 = lookup("USA");
country.getISO2(); // returns "US"

// Static method
lookup.similar("france");
/*
{
    "continent": "Europe",
    "region": "Western Europe",
    "country": "France",
    "capital": "Paris",
    "fips": "FR",
    "iso2": "FR",
    "iso3": "FRA",
    "isoNo": "250",
    "internet": "FR",
    "timezone": [
        "Europe/Paris"
    ]
}
*/

lookup.getISO2("USA"); // returns "US"
```

## Test
```ssh
$ npm run test
```
