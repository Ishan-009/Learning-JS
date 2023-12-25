const temperatures = [17, 21, 23];

const printForecast = function (temp) {
  let string = "";
  // let day = 1; // we can do index + 1
  // Iterating the array

  for (let index = 0; index < temp.length; index++) {
    // String Templete consisting of the output but with actual array values
    string += `.... ${temp[index]} degree celcius in ${index + 1} `;
  }

  return string;
};

// Invoking the function and taking returned string to new varible

let res = printForecast(temperatures);
console.log(res);

// Understand the problem

// I have to print weather forecast in the string , ... 17 degree in 1 day, 21 degree in 2 days
// seems like we are considering order of the element position as a day

// Divide adn conquer

// create a empty string and iterate over the temp array and append string as over the iterating through other values

// Breaking big problems into small
