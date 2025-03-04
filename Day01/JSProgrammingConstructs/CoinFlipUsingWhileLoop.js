//Create a function to simulate a coin flip and return the resultF
function coinFlip() {
    //Create a variable to store the random value 0 or 1
    let num = Math.random().toFixed();
  
    //Check the conditon
    if (num == 0) {
      //Return the result
      return "Heads";
    } else {
      //Return the result
      return "Tails";
    }
  }
  
//Create a funtion to find the coin flip winner
  function coinFlipWinner(){

    //Create two variable to store the head and tail count
    let headCount=0;
    let tailCount =0;

    //Use while loop
    while(headCount<11 && tailCount<11){
        //Create a variable to store the result
        let result = coinFlip();

        //Use if to check condition
        if(result==="Heads"){
            headCount++;
        } else{
            tailCount++;
        }
    }

    //Print the both counts
    console.log(`No. of Heads ${headCount} and No. of Tails ${tailCount}`);
    
    //Return the value
    return (headCount===11)?"Heads Win!":"Tails Win!";
  }


  //Call the function and print the result
  console.log(coinFlipWinner());
  