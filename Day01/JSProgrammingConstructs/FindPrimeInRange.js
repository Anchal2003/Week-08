//Create a function to check the number is prime
function isPrime(num) {
  //Use if to check the condition and return the result
  if (num <= 1) {
    return false;
  }

  //Use for loop to check the prime number
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      //Return the result
      return false;
    }
  }

  //Return the result
  return true;
}

//Create two variable and take output from user using command line argument
let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

//Print the statement
console.log(`Prime Numbers in given range from ${start} to  ${end}`);

//Use for loop to print the result
for (let i = start; i <= end; i++) {
  //Check the condition
  if (isPrime(i)) {
    //Print the result
    console.log(i);
  }
}
