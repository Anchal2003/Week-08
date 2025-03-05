//Create a function findMagicNumber to find the magic number 
function findMagicNumber() {
  //Create a varaible to store min and max and guess number
  let min = 1;
  let max = 100;
  let guess;

  //Use alert to the user
  alert("Think of a number between 1 and 100, and I will try to guess the number.");

  //use while loop
  while (min <= max) {
    //calculate the middle number
    guess = Math.floor((min + max) / 2);

    //Create a variable to store response and retrun the result
    let response = prompt(`Is your number ${guess}? (Enter 'less' if it's less, Enter 'greater' if it's greater, Enter 'correct' If Guess Right)`);
    
    //Convert the response to lower case
    response = response.toLowerCase();

    //Check the condition
    if (response === "correct") {
      //Give the alert message
      alert(`Good! The magic number is ${guess}`);
      //Print the result
      console.log(`Good! The magic number is ${guess}.`);
      break;
    } else if (response === "less") {
      //update the value of max
      max = guess - 1;
    } else if (response === "greater") {
      //update the value of min
      min = guess + 1;
    } else {
      //Print the statement
      console.log("Invalid input! Please enter 'less' for less, 'greater' for greater, or 'correct' for correct.");
    }
  }
}

//call the function
findMagicNumber();