function curConverter(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        'RUB': {
            'USD': 0.02,
            'EUR': 0.098
        },
        'USD': {
            'RUB': 97.28,
            'EUR': 0.97
        },
        'EUR': {
            'RUB': 101, 
            'USD': 1.03   
        }
    }

    let convertedAmount;
    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    } else {
        return null; 
    }

    return convertedAmount;
}

console.log(curConverter(1000, 'USD', 'RUB')); 
console.log(curConverter(1000, 'RUB', 'EUR')); 
console.log(curConverter(1000, 'RUB', 'BYN')); 