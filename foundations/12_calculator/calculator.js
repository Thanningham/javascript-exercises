const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const result = arr.reduce((total, number) => {
    return total + number;
  }, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((total, number) => {
    return total * number
  }, 1)
  return result;
};

const power = function(base, exponent) {
  let result = 1;
  for(let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  for(let i = number - 1; i > 1; i--) {
    number = number * i
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
