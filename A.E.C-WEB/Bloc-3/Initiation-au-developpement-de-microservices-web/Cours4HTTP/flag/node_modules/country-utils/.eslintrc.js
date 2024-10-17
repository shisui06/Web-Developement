"use strict";

module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
		"es6": true,
		"browser": true
    },
    "extends": [
		"eslint:recommended"
	],
    "parserOptions": {
        "ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		}
    },
    "rules": {
        "no-console": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
