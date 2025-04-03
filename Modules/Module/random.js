// 1. A function that generates a random integer within a specified range - the minimum and maximum values of the range should be passed as parameters when calling the function.
const randomInteger = (min, max) => {
  const randomNumber = Math.random(min, max);
  return Math.round(randomNumber * (max - min) + min);
};

// 2. A function that generates a random alphanumeric string (lowercase letters, uppercase letters, digits) - the number of characters in the generated string should be provided as a parameter.
const randomAlphaNumericString = (numberOfCharacters) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let randomAlphaNumeric = "";

  for (let i = 0; i < numberOfCharacters; i++) {
    randomAlphaNumeric += characters.charAt(Math.random() * characters.length);
  }
  return randomAlphaNumeric;
};

// 3. A function that generates an array of random integers - the minimum and maximum values of the range from which the numbers should be drawn, as well as the length of the array, should be passed as parameters when calling the
const randomArray = (min, max, arrayLength) => {
  const arrayRandom = [];
  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.round(Math.random(min, max) * (max - min) + min);
    arrayRandom.push(randomNumber);
  }
  return arrayRandom;
};

export { randomInteger, randomAlphaNumericString, randomArray };
