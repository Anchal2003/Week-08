//Create the function getNthHarmonicNumber to calculate Nth the harmonic number
function getNthHarmonicNumber() {
  //check the condition for invalid input
  if (isNaN(number) || number <= 0) {
    //Return the value
    return "Please enter valid input non negative number!";
  }

  //Create a variable to store the harmonic number
  let harmonicNumber = 0;

  //Use for loop to calculate nth harmonic number
  for (let i = 1; i <= number; i++) {
    harmonicNumber += 1 / i;
  }

  //Return the result
  return harmonicNumber;
}

//Create a variable and take output from user using command line argument
let number = parseInt(process.argv[2]);

//Call the funtion and print the result
console.log(`${number} Harmoninc Number is: ${getNthHarmonicNumber(number)}`);
