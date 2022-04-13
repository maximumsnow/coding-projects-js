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

    if (number == 1) {
        primeFactors.push(1);
    } else {
        for (let i = 2; number > 1; i++) {
            for (; number % i == 0; number /= i) {
                primeFactors.push(i);
            }
        }
    }
    return primeFactors;
}

module.exports = { 
    getPrimeFactorsAsEquation,
    getPrimeFactors
}