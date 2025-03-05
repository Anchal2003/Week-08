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


//Create a variable and take input from user using command line argument
let number = parseInt(process.argv[2]);

//Check condition
if (isPrime(number)) {
  //print the result
  console.log(`${number} is a prime number.`);
} else {
  //Print the result
  console.log(`${number} is not a prime number.`);
}
