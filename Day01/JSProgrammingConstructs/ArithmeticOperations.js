//Create a function to perform some arithmetic operation and print the max an min result
function arithmeticOperations(a, b, c) {
  //Create variable to perform arithmetic operation and store the result
  const operation1 = a + b * c;
  const operation2 = (a % b) + c;
  const operation3 = c + a / b;
  const operation4 = a * b + c;

  //Create an array to store the all operation result
  const result = [operation1, operation2, operation3, operation4];

  console.log(result);

  //Call the max function and print the result
  console.log("Maximum result: ", Math.max(...result));

  //Call the min function and print the result
  console.log("Minimum result: ", Math.min(...result));
}

//Create variables and take input from user
const a = prompt("Enter the value of A:");
const b = prompt("Enter the value of B:");
const c = prompt("Enter the value of C:");

//Call the function
arithmeticOperations(parseInt(a), parseInt(b), parseInt(c));
