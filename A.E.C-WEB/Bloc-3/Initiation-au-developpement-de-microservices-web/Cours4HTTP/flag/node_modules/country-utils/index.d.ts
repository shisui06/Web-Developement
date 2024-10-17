declare const countryUtils: countryUtils.CountryUtilsStatic;

declare namespace countryUtils {

	interface country {
		continent: string,
		region: string,
		country: string,
		capital: string,
		fips: string,
		iso2: string,
		iso3: string,
		isoNo: number,
		internet: string,
		timezone: string[]
	}

	interface CountryUtilsStatic {
		(string: string): CountryUtilsBound;
		getISO2(string: string): string,
		similar(string: string): country
	}

	interface CountryUtilsBound {
		getISO2(): string,
		similar(): country
	}

}

export = countryUtils;
