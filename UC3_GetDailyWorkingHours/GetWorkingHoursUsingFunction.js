function employeeWorkingHours(empCheck) {
  //Create a constant variable to store working hours
  const PART_TIME = 4;
  const FULL_TIME = 8;

  //Use switch statement case
  switch (empCheck) {
    //Match cases and return the value
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
//Create a variable to store employee status
let empCheck = Math.floor(Math.random() * 10) % 3;
//Create a employeeWage varaible to store employee wage
let employeeHours = employeeWorkingHours(empCheck);

//Create a employeeWage varaible to store employee wage
let employeeWage = employeeHours * WAGE_PER_HOURS;

//print the result
console.log("Employee Wage: $" + employeeWage);
