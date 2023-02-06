const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = ratioOfTwoNumbers(n1, n2);
  const factorial = factorialOfNumber(n3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
