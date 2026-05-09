function secondLargest(arr) {
  let first = -Infinity,
    second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second;
}

const arr = [1, 9, 9, 8, 4, 10, 5, 0];

console.log(secondLargest(arr));
