"use strict";

const myName = "Ishan";
let functionalScopeAccess;
let ifBlockScopeAccess;
function first(age) {
  let functionalScopeAccess = true;
  if (age >= 30 && age < 50) {
    let ifBlockScopeAccess = true;
    var middleAgeMen = true;
    console.log(
      `if block scope, myName => ${myName}, age => ${age}, middleageMen => ${middleAgeMen}, functional scope access => ${
        functionalScopeAccess ?? false
      }`
    );
  }

  console.log(
    `first functional scope access => myName => ${myName}, ${
      ifBlockScopeAccess ?? false
    }, ${functionalScopeAccess ?? false}`
  );
}

first(30);
console.log(
  `global scope =>  first functional scope acceess => ${
    functionalScopeAccess === "undefined" ?? false
  }, if block scope access => ${ifBlockScopeAccess === "undefined" ?? false}`
);
