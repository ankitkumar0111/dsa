function sumNumbers(n) {
  if (n == 0) {
    return 0;
  }
  return n + sumNumbers(n - 1);
}

console.log(sumNumbers(5));
