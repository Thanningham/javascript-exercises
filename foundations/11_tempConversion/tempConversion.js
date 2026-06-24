const convertToCelsius = function(fahrenheit) {
  let convertedNum = (fahrenheit - 32) * (5 / 9);
  return +convertedNum.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let convertedNum = (celsius * 1.8) + 32;
  return +convertedNum.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
