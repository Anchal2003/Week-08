//Create a function groupByBirthMonth
function groupByBirthMonth() {
    //Create a variable individuals to store value
    const individuals = 50; 

    //Create an object to store individuals group by their birth month
    const birthMonth = {}; 

    //Use for loop to initialize birthmonth
    for (let month = 1; month <= 12; month++) {
        birthMonth[month] = [];
    }

    // Use for loop to assign a random birth month (1 to 12)
    for (let person = 1; person <= individuals; person++) {
        //Use Math.random to random month between 1 and 12
        const randomMonth = Math.floor(Math.random() * 12) + 1; 
        birthMonth[randomMonth].push(`Person ${person}`); 
    }

    //return the birthMonth
    return birthMonth;
}

//Create a function to print the result
function printBirthMonth(birthMonth) {
    console.log("Individuals grouped by birth month:");
    //Use for loop
    for (const [month, people] of Object.entries(birthMonth)) {
        console.log(`Month ${month}:`, people.length > 0 ? people.join(", ") : "No birthdays");
    }
}

//Create a variable to birthMonth to store the birth and month data and call the method
const birthMonth = groupByBirthMonth();
//Call the method printBirthMonth
printBirthMonth(birthMonth);
