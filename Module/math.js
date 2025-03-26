const add = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = (...numbers) => {
  let sum = 1;
  for (let number of numbers) {
    sum *= number;
  }
  return sum;
};

module.exports.add = add;
module.exports.multiply = multiply;
