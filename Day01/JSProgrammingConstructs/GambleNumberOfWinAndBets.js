//Create a function to find number of times won and number of bets made
function getGambleStatus() {
  //Create a variable to store value
  let totalAmount = 100;
  let targetAmount = 200;
  let noOfWins = 0;
  let noOfBets = 0;

  //Use while loop 
  while (totalAmount > 0 && totalAmount < targetAmount) {
    //noOfBets increase by one
    noOfBets++;

    //Create variable betResult and store randomly wining result if true so store 1 otherwise store -1
    let betResult = Math.random() < 0.5 ? 1 : -1;

    //update total amount 
    totalAmount = totalAmount + betResult;

    //check the condition
    if (betResult == 1) {
      //noOfWins increase by one
      noOfWins++;
    }
  }

  //Check the condition
  if (totalAmount === 0) {
    //Print th result
    console.log("The gambler broke A Game!");
  } else {
    //Print th result
    console.log("The gambler reached the goal of Rs 200!");
  }

  //print the result after game end
  console.log(`Total bets made: ${noOfBets}`);
  console.log(`Total wins: ${noOfWins}`);
}

//Call the function
getGambleStatus();
