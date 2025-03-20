//create a function findTripletsThatSumToZero to find 
function findTripletsThatSumToZero(numbers) {
    //Create a const array result
    const result = [];
    
    // sort the array 
    numbers.sort((a, b) => a - b);

    //Use for loop
    for (let i = 0; i < numbers.length - 2; i++) {
      
        if (i > 0 && numbers[i] === numbers[i - 1]) continue;

        //Create a variable left and right 
        let left = i + 1; 
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[i] + numbers[left] + numbers[right];

            if (sum === 0) {
                //Add the triplet to the result
                result.push([numbers[i], numbers[left], numbers[right]]);
                //Use while loop
                while (left < right && numbers[left] === numbers[left + 1]) left++;
                while (left < right && numbers[right] === numbers[right - 1]) right--;

                //increate left by 1 and decrease right by 1
                left++;
                right--;
            } else if (sum < 0) {
                // If the sum is less than zero increase left by 1
                left++;
            } else {
                // If the sum is greater than zero decrease right by 1
                right--;
            }
        }
    }

    //return the result
    return result;
}

//Create a array inputArray for example perpose
const inputArray = [-1, 0, 1, 2, -1, -4];
//Create a triplets to store result and call the function
const triplets = findTripletsThatSumToZero(inputArray);
//print the result
console.log("Triplets that sum to zero:", triplets);
