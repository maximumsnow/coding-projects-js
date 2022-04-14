const getPrimeFactorsAsEquation = (number) => {

    if (!Number.isInteger(number)) return(`Error: ${number} is not an integer`);

    const primeFactors = getPrimeFactors(number);
    let result = "";

    primeFactors.sort();

    primeFactors.forEach(factor => result += factor + " x ");

    result = result.substring(0, result.length - 2);

    result += "= " + number;

    return result;
}

const getPrimeFactors = (number) => {

    if (!Number.isInteger(number)) return(`Error: ${number} is not an integer`);
    
    let primeFactors = [];

    // Add code here

    return primeFactors;
}

module.exports = { 
    getPrimeFactorsAsEquation,
    getPrimeFactors
}