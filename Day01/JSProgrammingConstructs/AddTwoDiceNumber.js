//Create a funtion to get the Dice Number Using REPL
function getDiceNumber(){
    //Call the floor and random method and return the value
   return Math.floor(Math.random()*6)+1;
}

//Create a funtion addTwoDiceNumber to add the dice number
function addTwoDiceNumber(){
    //Create const variable to store variable and call the getDiceNumber() function
    const diceNumber1 = getDiceNumber();
    const diceNumber2 = getDiceNumber();

    //Create  a const variable answer to store the result
    const answer  = diceNumber1 + diceNumber2;

    //Return the value
    return `Dice Number1 : ${diceNumber1} \nDice Number2 : ${diceNumber2} \nAdditon : ${answer}`;
}

//Print the result and call the method
console.log(addTwoDiceNumber());