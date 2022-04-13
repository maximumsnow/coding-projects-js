const primeFactors = require('../lib/primeFactors');

test('primeFactors: non integer value returns an error', () => {
    expect(primeFactors.getPrimeFactors('a')).toBe('Error: a is not an integer');
    expect(primeFactors.getPrimeFactors('-12.3')).toBe('Error: -12.3 is not an integer');
    expect(primeFactors.getPrimeFactors('1.1')).toBe('Error: 1.1 is not an integer');
    expect(primeFactors.getPrimeFactors('0')).toBe('Error: 0 is not an integer');
    expect(primeFactors.getPrimeFactors('snowman')).toBe('Error: snowman is not an integer');
});

test('getPrimeFactorsAsEquation: non integer value returns an error', () => {
    expect(primeFactors.getPrimeFactorsAsEquation('a')).toBe('Error: a is not an integer');
    expect(primeFactors.getPrimeFactorsAsEquation('18.9')).toBe('Error: 18.9 is not an integer');
    expect(primeFactors.getPrimeFactorsAsEquation('snowman')).toBe('Error: snowman is not an integer');
    expect(primeFactors.getPrimeFactorsAsEquation('0')).toBe('Error: 0 is not an integer');
    expect(primeFactors.getPrimeFactorsAsEquation('-95.8')).toBe('Error: -95.8 is not an integer');
});

test('validate the prime factors of 1 - 17', () => {
    expect(primeFactors.getPrimeFactorsAsEquation(1)).toBe('1 = 1');
    expect(primeFactors.getPrimeFactorsAsEquation(2)).toBe('2 = 2');
    expect(primeFactors.getPrimeFactorsAsEquation(3)).toBe('3 = 3');
    expect(primeFactors.getPrimeFactorsAsEquation(4)).toBe('2 x 2 = 4');
    expect(primeFactors.getPrimeFactorsAsEquation(5)).toBe('5 = 5');
    expect(primeFactors.getPrimeFactorsAsEquation(6)).toBe('2 x 3 = 6');
    expect(primeFactors.getPrimeFactorsAsEquation(7)).toBe('7 = 7');
    expect(primeFactors.getPrimeFactorsAsEquation(8)).toBe('2 x 2 x 2 = 8');
    expect(primeFactors.getPrimeFactorsAsEquation(9)).toBe('3 x 3 = 9');
    expect(primeFactors.getPrimeFactorsAsEquation(10)).toBe('2 x 5 = 10');
    expect(primeFactors.getPrimeFactorsAsEquation(11)).toBe('11 = 11');
    expect(primeFactors.getPrimeFactorsAsEquation(12)).toBe('2 x 2 x 3 = 12');
    expect(primeFactors.getPrimeFactorsAsEquation(13)).toBe('13 = 13');
    expect(primeFactors.getPrimeFactorsAsEquation(14)).toBe('2 x 7 = 14');
    expect(primeFactors.getPrimeFactorsAsEquation(15)).toBe('3 x 5 = 15');
    expect(primeFactors.getPrimeFactorsAsEquation(16)).toBe('2 x 2 x 2 x 2 = 16');
    expect(primeFactors.getPrimeFactorsAsEquation(17)).toBe('17 = 17');
});