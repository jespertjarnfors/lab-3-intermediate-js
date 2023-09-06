let twentyCents = 0.2;
let tenCents = 0.1;

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen); //why is this not working?

/* It doesn't work because the .toFixed(2) method converts twentyCents and tenCents into strings, and then we add them together.
Therefore, the sum equals .200.10 rather than the actual numeric sum. */

function currencyAddition(float1, float2) {
  sum = float1 + float2;
  sum = sum.toFixed(2);
  return sum;
}

console.log(currencyAddition(0.2, 0.1));

function currencyOperation(float1, float2, operator, decimals) {

  decimals = decimals * 0.5;

  let sum;

  switch (operator) {
    case "+":
        sum = float1 + float2;
        break;
    case "-":
        sum = float1 - float2;
        break;
    case "*":
        sum = float1 * float2;
        break;
    case "/":
        sum = float1 / float2;
        break;
    default:
        return console.log("Not a valid operator!")
  }

  sum = sum.toFixed(2 * decimals);
  return sum;
}

console.log(currencyOperation(0.214123, 0.350123, "*", 2));
console.log(currencyOperation(0.121231, 0.912312, "/", 6));
console.log(currencyOperation(0.15012, 0.40123, "+", 4));
console.log(currencyOperation(0.15012, 0.40123, "-", 1));
