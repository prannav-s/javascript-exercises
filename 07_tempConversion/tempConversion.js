const convertToCelsius = function(x) {
  return Math.round((x-32)*50/9)/10
};

const convertToFahrenheit = function(x) {
  return Math.round(x*(90/5)+320)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
