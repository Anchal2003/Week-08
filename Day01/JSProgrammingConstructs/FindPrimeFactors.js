//Create a function to compute the prime factors of a number N
function primeFactorization(N) {
  //Check number is less than or equal to 1
  if (N <= 1) {
    //Print the statement
    console.log("Numbers those less than or equal to 1 has no prime factor.");
    return;
  }

  //Use while loop to print the prime factor
  while (N % 2 === 0) {
    //Print the result
    console.log(2);
    N /= 2;
  }

  //Use for loop to find prime factor and print
  for (let i = 3; i * i <= N; i += 2) {
    //Use while to check i is prime factor or not
    while (N % i === 0) {
      // Print the prime factor
      console.log(i);

      //Update the value of N
      N /= i;
    }
  }

  //Check that is N also be a prime factor itself
  if (N > 2) {
    //Print the result
    console.log(N);
  }
}

//Create a variable and take output from user using command line argument
let number = parseInt(process.argv[2]);

//Check condition for valid input
if (process.argv.length < 3 || isNaN(number)) {
  console.log("Please enter valid number!");
} else {
  //print the statement
  console.log(`Prime factors of ${number} are:`);

  //Call the function
  primeFactorization(number);
}
