// Example 1 :-

let f;
const g = function () {
  const value = 200;
  f = function () {
    console.log(value * 2);
  };
};

const h = function () {
  const value = 300;
  f = function () {
    console.log(value * 3);
  };
};

g();
f();

h();
f();

console.dir(f); // so now it has value of parent scope of function h

// Example 2:-

function abc(n, wait) {
  const commonValue = 34; // comment this and see global scope var value prints and otherwise this will print, so hence closure has prority over global scope chain
  setTimeout(() => {
    console.log(`Waiting for the ${n} passengers`);
    console.log(`Common Value inside timeout = ${commonValue}`);
  }, 1000 * wait);

  console.log(`Waiting for ${wait} seconds`);
}

const commonValue = 100;

abc(180, 3);

// Closures

// let globalCount = 0;
// function parentFunction() {
//   let count = 0;

//   return function () {
//     this.globalCount++;
//     console.log(globalCount);
//   };
// }

// const storeFunction = parentFunction();

// console.dir(storeFunction);
