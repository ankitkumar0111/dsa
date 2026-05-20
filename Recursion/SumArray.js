function totalSumOfArray(n) {
  if (n == arr.length-1) {
    return arr[n];
  }

  return arr[n] + totalSumOfArray(n+1);
}

let arr = [5, 4, 3, 0, 1];
console.log(totalSumOfArray(0));
