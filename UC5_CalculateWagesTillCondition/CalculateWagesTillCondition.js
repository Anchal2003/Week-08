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

//Create a constant variable to store values
const WAGE_PER_HOURS = 20;
const MAX_WORKING_HOURS_IN_MONTHS = 160;
const MAX_WORKING_DAYS_IN_MONTHS = 20;
let employeeHours = 0;
let employeeDays = 1;

//Use while loop
while (employeeHours <= MAX_WORKING_HOURS_IN_MONTHS && employeeDays < MAX_WORKING_DAYS_IN_MONTHS) {
  employeeDays++;
  //Create a variable to store employee status 
  let employeeStatus = Math.floor(Math.random() * 10) % 3;
  //Create a employeeWage varaible to store employee wage
  employeeHours += employeeWorkingHours(employeeStatus);
}

//Create a employeeWage varaible to store employee wage of month
let monthlyWages = employeeHours * WAGE_PER_HOURS;

//print the result
console.log(
  "UC5:\nTotal Days: ",
  employeeDays,
  "\nTotal Working Hours: ",
  employeeHours,
  "\nTotal Wage Of Month: ",
  monthlyWages
);
