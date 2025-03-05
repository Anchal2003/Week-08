//Creata a Constant variable 
const IS_ABSENT = 0;

//Create a variable attendenceStatus to store to attendence states in numeric
let employeeAttendance = Math.floor(Math.random() * 10) % 2;

//check condition and print the result
if (employeeAttendance == IS_ABSENT) {

  //print the result if absent
  console.log("Employee is absent!");
} else {
  //Print the result if present
  console.log("Employee is present!");
}
