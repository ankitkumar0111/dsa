// function printNumbers(n) {
//   if (n == 0) return;
//   console.log(n);
//   n = n - 1;
//   printNumbers(n);
// }

// console.log(printNumbers(10));

let n = 5;
function printNumbers(x) {
  if (x > n) return;
  console.log(x);
  x = x + 1;
  printNumbers(x);
}

console.log(printNumbers(1));
