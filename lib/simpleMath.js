const calculator = (operandOne, operandTwo, operation) => {
  if (isNaN(operandOne) || isNaN(operandTwo)) {
    return 'Error: operandOne and operandTwo must be numbers';
  }
  
  if (!isNaN(operation)) return 'Error: Invalid Operator';
  if (operation === undefined) operation = 'u';
  if (['a', 's', 'm', 'u'].includes(operation.toLowerCase())) {
    if (operation === 'u') {
      return (operandOne + operandTwo).toString();
    }
  } else {
    return 'Error: Invalid Operator';
  }
};

module.exports = {
  calculator,
};
