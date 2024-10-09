const exchangeRates = {
    "CAD": "1",
    "EURO": "0.67",
    "USD": "0.74"
};

function getExchangeRate(currency) {
    return parseFloat(exchangeRates[currency]);
}

module.exports = { getExchangeRate };
