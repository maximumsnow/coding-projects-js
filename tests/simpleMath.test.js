const simpleMath = require('../lib/simpleMath');

test('operandOne should be added to operandTwo if Operation is undefined', () => {
    expect(simpleMath.calculator(5, 5)).toBe('10');
    expect(simpleMath.calculator(0, 0)).toBe('0');
    expect(simpleMath.calculator(-4, 10)).toBe('6');
});

test('return error if operandOne and operandTwo are not valid numbers', () => {
    expect(simpleMath.calculator('a', 3)).toEqual('Error: operandOne and operandTwo must be numbers');
})

test('return error if operation is not valid', () => {
    expect(simpleMath.calculator(6, 3, 'b')).toEqual('Error: Invalid Operator');
    expect(simpleMath.calculator(6, 3, 7)).toEqual('Error: Invalid Operator');
    expect(simpleMath.calculator(6, 3, -1)).toEqual('Error: Invalid Operator');

})

