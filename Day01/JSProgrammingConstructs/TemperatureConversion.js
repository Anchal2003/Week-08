//Create a function to convert temperature celsius to fahrenheit
function degFConvert(degC) {
  return ((degC * 9) / 5 + 32).toFixed(2);
}

//Create a function to convert temperature fahrenheit to celsius
function degCConvert(degF) {
  return (((degF - 32) * 5) / 9).toFixed(2);
}

//Create a function to handle temperature conversion
function temperatureConversion(temperature) {
  //Create a variable to store conversion type and take input from user
  let conversionType = prompt("Enter Conversion Type (degC or degF)");

  //Use switch case to conversion selection
  switch (conversionType.toLowerCase()) {
    //Match cases and print the result
    case "degc":
      //Print the result
      console.log(`${temperature} degF = ${degCConvert(temperature)} degC`);
      break;
    case "degf":
      //Print the result
      console.log(`${temperature} degC = ${degFConvert(temperature)} degF`);
      break;
    default:
      //Print the result
      console.log("Invalid Conversion Type Please Select (degC or degF)");
  }
}

//Create a variable to store temperature and print the result
let temperature = parseFloat(prompt("Enter Temperature "));

//Call the function
temperatureConversion(temperature);
