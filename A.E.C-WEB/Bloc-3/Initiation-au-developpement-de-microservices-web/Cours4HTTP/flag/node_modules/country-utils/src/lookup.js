"use strict";

const timezone = require("country-timezone");
const stringSimilarity = require("string-similarity");
const countries = require("country-code-lookup").countries;

function lookup(string) {
	return Object.keys(lookup).reduce((proxy, key) => {
		proxy[key] = lookup[key].bind(lookup, string);
		return proxy;
	}, {});
}

/**
 * Get ISO2 code from string
 * @param {string} string - any string
 */
lookup.getISO2 = function (string) {
	if (string.length === 2) {
		const country = countries.find(item => item.iso2.toUpperCase() == string.toUpperCase());
		return country ? country.iso2 : void 0;
	}
	if (string.length === 3) {
		const country = countries.find(item => item.iso3.toUpperCase() == string.toUpperCase());
		return country ? country.iso2 : void 0;
	}
	for (const country of countries) {
		if (string.toLowerCase().trim() == country.country.toLowerCase())
			return country.iso2;
		if (string.toLowerCase().trim() == country.capital.toLowerCase())
			return country.iso2;
	}
};

lookup.similar = function (string) {
	let _similarity = 0, _country = null;
	if (string.length <= 1)
		return void 0;
	for (const country of countries) {
		if (string.length === 2) {
			if (country.iso2 == string)
				return send(country);
		}
		if (string.length === 3) {
			if (country.iso3 == string)
				return send(country);
		}
		let similarity = Math.max(
			stringSimilarity.compareTwoStrings(string, country.country),
			stringSimilarity.compareTwoStrings(string, country.capital)
		)
		if (similarity > _similarity) {
			_similarity = similarity;
			_country = country;
		}
	}
	return send(_country);
};

function send(object) {
	if (object !== void 0) {
		let result = JSON.parse(JSON.stringify(object));
		result.timezone = timezone.getTimezonesWithCountryCode(object.iso2);
		return result;
	}
}

module.exports = lookup;

