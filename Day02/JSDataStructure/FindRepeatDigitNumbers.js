//Create a function to find the number with repeated digit
function findRepeatedDigitsNumber() {
    //Create an array to store result
    const DigitRepeted = [];  
 
    //Use for loop
    for (let number = 0; number <= 100; number++) {
        //Convert the number to a string a
        const numberString = number.toString(); // Convert the number to a string

        // Check if the number has two identical digits
        if (numberString.length === 2 && numberString[0] === numberString[1]) {
            // Add the number to the result array
            DigitRepeted.push(number); 
        }
    }

    return DigitRepeted;
}

// call the method findRepeatedDigitsNumber 
const findRepeatedDigitsNumber = findNumbersWithRepeatedDigits();
// print the result 
console.log("Numbers with repeated digits:", numbersWithRepeatedDigits);
