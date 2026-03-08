
let num = 5;

// Function to calculate factorial
function factorialCalculator(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

// Call the function
let factorial = factorialCalculator(num);

// Store the message
let resultMsg = "Factorial of " + num + " is " + factorial;

// Output the result
console.log(resultMsg);