// type conversion

// type conversion is when we manually cover the js into other data types like from string to integer or from string to integer depending upon the output that we want

let numberOne = "1";
console.log(Number(numberOne) + 10);

let numberTwo = 2;
console.log("My data type is " + typeof String(numberTwo));

// Type cohersion
// here js automatically converts one data type to another internally depending upon various situtations/cases

let number = 10;

console.log(typeof ("My Lucky Number is " + number)); // op:- string

// so here js converts the whole line of code to the string as we are concatenate using + operator with string value , it converts other part of the value to the string assuming that we can to concatenate as in this way

console.log("20" - number);
// but here with - operator case is different , here it only js assumes and makes sense that the value present in the string and with - operator it internally assumes that we want to do the number math operation wwhich completely makes sense over here.

// same with other operator like divide, multiply etc

console.log("20" * number); // op :- 200

// what if the value in string is actually string value and then we perform thsi operation

console.log("Ishan" - number); // Nan

// it returns Nan which that following operation we are doing is not applicable as per the value constraints, so it gives number value but it is invalid which is nan;
