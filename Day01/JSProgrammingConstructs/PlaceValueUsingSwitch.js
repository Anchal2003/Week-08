//Create  a function to return the week day
function numberPlaceValueUsingSwitch(num) {
    //Use switch to check the condition
    switch (true) {
        //Match the cases and return tbe value
        case (num >= 0 && num <= 9):
          return "Ones";
        case (num >= 10 && num <= 99):
          return "Tens";
        case (num >= 100 && num <= 999):
          return "Hundreds";
        case (num >= 1000 && num <= 9999):
          return "Thousands";
        default:
          return "Please enter a number between 0-9999";
      }
  }
  
  //Create a variable and take input from user
  let number = prompt("Enter number.");
  
  //Print the result and call the function
  console.log(numberPlaceValueUsingSwitch(number));
  