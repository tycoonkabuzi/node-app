// addition
const addition = (firstValue, secondValue) => {
  const result = Number(firstValue) + Number(secondValue);
  return result;
};

// multiplication
const multiplication = (firstValue, secondValue) => {
  const result = Number(firstValue) * Number(secondValue);
  return result;
};

// subtraction
const subtraction = (firstValue, secondValue) => {
  const result = Number(firstValue) - Number(secondValue);
  return result;
};
//division

const division = (firstValue, secondValue) => {
  let result = Number(firstValue) / Number(secondValue);
  return result;
};

const operation = true;
console.log(process.argv[2]);
switch (operation !== undefined) {
  case process.argv[2] === "add":
    console.log(`The result is ${addition(process.argv[3], process.argv[4])}`);
    break;
  case process.argv[2] === "multi":
    console.log(
      `The result is ${multiplication(process.argv[3], process.argv[4])}`
    );
    break;
  case process.argv[2] === "sub":
    console.log(
      `The result is ${subtraction(process.argv[3], process.argv[4])}`
    );
    break;
  case process.argv[2] === "div":
    console.log(`The result is ${division(process.argv[3], process.argv[4])}`);
    break;
  default:
    console.log(
      "Unknown operation or missing operation try add, multi, div, sub"
    );
}
