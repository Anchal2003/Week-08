//Create constant variables to store  working hours
const PART_TIME = 4;
const FULL_TIME = 8;

//Create a constant variables to store the wages/hours
const WAGE_PER_HOURS = 20;

//Create a variable to store employee working hours and initialize them
let employeeHours = 0;

//Create a variable to store the random value
let empCheck = Math.floor(Math.random() * 10) % 3;

//Use switch case  
switch (empCheck) {
  //Match the cases and set the value
  case 1:
    employeeHours = PART_TIME;
    break;
  case 2:
    employeeHours = FULL_TIME;
    break;
  default:
    employeeHours = 0;
    break;
}

//Create a variable to store employee wage
let employeeWage = employeeHours * WAGE_PER_HOURS;

//print the result
console.log("Employee Wage: $" + employeeWage);
