//Create a funtion to generate the Three digit Number Using REPL
function getTwoDigitNumber() {
  //Call the floor and random method and return the value
  return Math.floor(Math.random() * 900 + 100);
}

//Create a funtion to find the minimum value
function minimum(numbers) {
  //Create a variable min to store the minimum value
  let min = numbers[0];

  //use for loop
  for (let val of numbers) {
    //Check the conditon using if
    if (val < min) {
      min = val;
    }
  }

  //return the min
  return min;
}

//Create a funtion to find the maximum value
function maximum(numbers) {
  //Create a variable max to store the maximum value
  let max = 0;

  //use for loop
  for (let val of numbers) {
    //Check the conditon using if
    if (val > max) {
      max = val;
    }
  }

  //return the max
  return max;
}

//Create a array numbers
let numbers = [];
//Use for loop to store the random values
for (let i = 0; i < 5; i++) {
  //Store the value and call the function getTwoDigitNumber()
  numbers[i] = getTwoDigitNumber();
}

//Print the result
console.log("Random 5 values: ", numbers);
console.log("Minimum value : ", minimum(numbers));
console.log("Maximum value : ", maximum(numbers));
