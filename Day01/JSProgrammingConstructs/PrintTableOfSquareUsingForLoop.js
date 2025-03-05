//Create a function printTheTAble to calculate and print the table of the power of two
function printTheTableOfSquares() {
  //Create a variable and take input from user using command line argument
  let number = parseInt(process.argv[2]);

  //Check the condition
  if (isNaN(number) || number <= 0) {
    //Print the statement
    console.log("Please enter valid input non negative number!");
    return;
  }

  //Using for loop to print the and calculate the table
  for (let i = 0; i < number; i++) {
    //Print the result
    console.log(`2^${i}=${Math.pow(2, i)}`);
  }
}

//Call the function 
printTheTableOfSquares();
