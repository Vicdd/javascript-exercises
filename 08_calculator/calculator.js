const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(e => sum += e);
  return sum;
};

const multiply = function(...args) {
  let res = 1;
  args.forEach(e => res *= e);
  return res;
};

const power = function(x, y) {
  let res = 1;
  for (let i = 1; i <= y ; i++) res *= x;
  return res;
};

const factorial = function(x) {
	let res = 1;
  for (let i = 1; i <= x ; i++) res *= i;
  return res;
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
