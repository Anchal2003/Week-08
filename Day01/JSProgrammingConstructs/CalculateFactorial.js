//Create a function calculateFactorial to calculate the factorial of the number
function calculateFactorial(number) {
  //Create a variable to store factorial
  let factorial = 1;

  //use for loop to calculate factorial
  for (let i = 1; i <= number; i++) {
    factorial = i * factorial;
  }

  //return the result
  return factorial;
}

//Create a variable and take input from user using command line argument
let number = parseInt(process.argv[2]);

//Call the function and print the result
console.log(`Factorial of ${number} is:  ${calculateFactorial(number)}`);