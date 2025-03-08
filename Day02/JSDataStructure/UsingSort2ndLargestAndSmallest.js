//Create a funtion to generate the Three digit Number Using REPL
function getThreeDigitNumber() {
    //Call the floor and random method and return the value
    return Math.floor(Math.random() * 900 + 100);
  }
  
  //Create a function to sort the array
  function sortTheArray(arr) {
    //Return the value
    return arr.sort((a, b) => a - b);
  }
  
  //Create a method to find the second lagrest number
  function findSecondLargest(arr) {
    //Return the result
    return arr[arr.length - 2];
  }
  
  //Create a method to find the second smallest number
  function findSecondSmallest(arr) {
    //Return the result
    return arr[1];
  }
  
  //Create a array numbers
  let numbers = [];
  //Use for loop to store the random values
  for (let i = 0; i < 10; i++) {
    //Store the value and call the function getThreeDigitNumber()
    numbers[i] = getThreeDigitNumber();
  }
  
  //Print the array
  console.log("Array of 10 random Number: ", numbers);
  
  //call the function and store the result
  let sortedArray = sortTheArray(numbers);
  
  //Print the sorted array
  console.log("Sorted Array: ", sortedArray);
  
  //Print the second largest number
  console.log("Second Largest Number: ", findSecondLargest(numbers));
  //Print the second smallest number
  console.log("Second Smallest Number: ", findSecondSmallest(numbers));
  