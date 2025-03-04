//Create  a function to return the week day
function displayWeekDay(num) {
  //Create an constant array to store the value
  const words = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  //Check condition that number is between 0-7
  if (num >0 && num <= 7) {
    //Return the result
    return words[num-1];
  } else {
    //Return the result
    return "Please enter Single Digit between 1-7";
  }
}

//Create a variable and take input from user
let number = prompt("Enter number of day.");

//Print the result and call the function
console.log(displayWeekDay(number));

