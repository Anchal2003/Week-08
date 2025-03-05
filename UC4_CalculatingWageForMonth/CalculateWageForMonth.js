//Create a function to calculate the working hours
function employeeWorkingHours(empCheck) {
  //Create a constant variable to store working hours
  const PART_TIME = 4;
  const FULL_TIME = 8;

  //Use switch case
  switch (empCheck) {
    //Match the cases and return the result
    case 1:
      return PART_TIME;
    case 2:
      return FULL_TIME;
    default:
      return 0;
  }
}

//Create a constant variable to store WAGE per hours in $
const WAGE_PER_HOURS = 20;
//Create a constant to store the working days
const WORKING_DAYS_IN_MONTHS = 20;

//Create a variable to store the value
let employeeHours = 0;

//Use for loop 
for (let i = 0; i < WORKING_DAYS_IN_MONTHS; i++) {
  //Create a variable to store employee status 
  let empCheck = Math.floor(Math.random() * 10) % 3;

  //Create a employeeWage varaible to store employee wage
  employeeHours += employeeWorkingHours(empCheck);
}

//Create a employeeWage varaible to store employee wage
let monthlyWages = employeeHours * WAGE_PER_HOURS;

//print the result
console.log("Employee Wage Of Month: $", monthlyWages);
