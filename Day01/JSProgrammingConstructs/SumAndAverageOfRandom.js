//Create a funtion to generate the Two digit Number Using REPL
function getTwoDigitNumber(){
    //Call the floor method and return the value
   return Math.floor((Math.random()*90) + 10);
}

//Create a function to sum all the numbers
function getSumOfNumber(numbers){
    //Create a variable to store value
    let sum =0;

    //Use for loop
    for(let val of numbers){
        sum+=val;
    }
    //return the sum
    return sum;
}

//Create a funtion to find the average of numbers
function getAverage(number){
    //Return the value
    return getSumOfNumber(number)/number.length;
}


//Create a array numbers
let numbers = [] ;
//Use for loop to store the random values
for(let i=0;i<5;i++){
   numbers[i] = getTwoDigitNumber();
}


//Print the result
console.log("Random 5 values: ",numbers);
console.log("Sum of the Numbers: ",getSumOfNumber(numbers));
console.log("Average of the Numbers: ",getAverage(numbers))