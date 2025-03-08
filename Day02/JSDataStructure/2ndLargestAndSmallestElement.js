//Create a funtion to generate the Three digit Number Using REPL
function getThreeDigitNumber() {
    //Call the floor and random method and return the value
    return Math.floor(Math.random() * 900 + 100);
}


//Create a method to find the second lagrest number
function findSecondLargest(arr){
    //Create two variable to store value
    let firstLargest = -Infinity, secondLargest = -Infinity;

    //Use for loop to find the largest and second largest number
    for (let num of arr) {
        //Check the condition 
        if (num > firstLargest) {
          secondLargest = firstLargest;
          firstLargest = num;
        } else if (num > secondLargest && num != firstLargest) {
          secondLargest = num;
        }
    }  

    //Return the result
    return secondLargest;

}

//Create a method to find the second smallest number
function findSecondSmallest(arr){
    //Create two variable to store value 
    let firstSmallest = Infinity, secondSmallest = Infinity;

    //Use for loop to find the largest and second smallest number
    for (let num of arr) {
          //Check the condition
        if (num < firstSmallest) {
          secondSmallest = firstSmallest;
          firstSmallest = num;
        } else if (num < secondSmallest && num != firstSmallest) {
          secondSmallest = num;
        }
      }
      //Return the result
      return secondSmallest;
}


//Create a array numbers
let numbers = [];
//Use for loop to store the random values
for (let i = 0; i < 10; i++) {
  //Store the value and call the function getThreeDigitNumber()
  numbers[i] = getThreeDigitNumber();
}

//Print the array
console.log("Array of 10 random Number: ",numbers);
//Print the second largest number
console.log("Second Largest Number: ",findSecondLargest(numbers));
//Print the second smallest number
console.log("Second Smallest Number: ",findSecondSmallest(numbers));