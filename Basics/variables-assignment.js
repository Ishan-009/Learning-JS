let massMark = 78;
let heightMark = 1.69;

let massJohn = 95;
let heightJohn = 1.95;

let bMIJohn = massJohn / (heightJohn * heightJohn);
let bMIMark = massMark / (heightMark * heightMark);

console.log(bMIJohn, bMIMark);

const higherBMI = bMIMark > bMIJohn;

console.log(higherBMI);
