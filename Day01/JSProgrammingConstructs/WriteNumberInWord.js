//Create  a function to convert the number into word
function numberInWord(num) {
  //Create an constant array to store the value
  const words = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

  //Check condition that number is single digit or not
  if (num >= 0 && num <= 9) {
    //Return the result
    return words[num];
  } else {
    //Return the result
    return "Please enter Single Digit between 0-9";
  }
}

//Create a variable and take input from user
let number = prompt("Enter a single digit number.");

//Print the result and call the function
console.log(numberInWord(number));
