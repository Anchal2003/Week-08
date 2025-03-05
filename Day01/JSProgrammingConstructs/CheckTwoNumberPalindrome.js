//Create a function to check the is palindrome or not
function isPalindrome(num){
    //Create a variable to store the value
    let rev = 0;

    //Create a variable temp to store the num
    let temp = num;

    //Use while loop to find reverse of the number
    while(temp>0){ 
        rev = (rev*10) +(temp%10);
        temp= Math.floor(temp/10);
    }

    //Use if to check the condition
    if(rev===num){
        //return true if condition is true
        return true;
    } else{
        //return true if condition is true
        return false;
    }
}

//Create two variable and take input from user
let num1 = parseInt(prompt("Enter first number"));
let num2 = parseInt(prompt("Enter second number"));

//Call the function and print the result
console.log(`${num1} and ${num2} both number are palindrome: ${isPalindrome(num1) && isPalindrome(num2)}`);