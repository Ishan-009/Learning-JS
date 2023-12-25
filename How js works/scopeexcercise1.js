// const a = 10;

// function outer() {
//   const b = 20;

//   function inner() {
//     const c = 30;
//     console.log(a + b + c);
//   }

//   inner();
// }

// outer(); // What will this log?

// // 60

const x = 100;

function outer() {
  const y = 200;

  function inner() {
    console.log(x + y);
  }

  return inner;
}

const innerFn = outer();
innerFn(); // What will this log?

// it will log x +y = 300
