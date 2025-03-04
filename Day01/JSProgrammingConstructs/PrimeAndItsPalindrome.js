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

//Create a  funtion to find the palindrome
function getPalindrome(num) {
  //Create a variable to store the value
  let rev = 0;

  //Create a variable temp to store the num
  let temp = num;

  //Use while loop to find reverse of the number
  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  //return the value
  return rev;
}

//Create a variable and take input from user
let number = parseInt(prompt("Enter a number"));

//Create a variable to store the palindrome of number
let numberPalindrome = getPalindrome(number);

//Check the condition and print the result
if (isPrime(number) && isPrime(numberPalindrome)) {
  //Print the result
  console.log(`${number} And It's Palindrome ${numberPalindrome} Both are prime`);
} else if (isPrime(number) && !isPrime(numberPalindrome)) {
  //Print the result
  console.log(`${number}  is Prime, But It's Palindrome ${numberPalindrome} is not prime`);
} else {
  //Print the result
  console.log(`${number} is not prime`);
}
