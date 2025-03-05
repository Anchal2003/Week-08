//Create a funtion to print the table of powers of 2
function printSquareTable(number) {
  //Create  a variable and initialize it
  let i = 0;

  //use for loop to print and calculae the table of power of 2
  while (number--) {
    //Create a variable to store power of 2
    let power = Math.pow(2, i);
    //check the condition
    if (power > 256) {
      break;
    }

    //print the table
    console.log(`2^${i}=${power}`);

    //Increase the value of i
    i++;
  }
}

//Create a variable and take input from user using command line argument
let number = parseInt(process.argv[2]);

//Check the condition
if (isNaN(number) || number <= 0) {
  //Print the statement
  console.log("Please enter valid and non negative number!");
} else {
  //call the function
  printSquareTable(number);
}
