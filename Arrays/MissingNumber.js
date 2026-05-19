function missingNumber(nums) {
  let n = nums.length;
  let sum1 = Math.floor((n * (n + 1)) / 2);
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 += nums[i];
  }
  return sum1 - sum2;
}

let nums = [3, 0, 1];

console.log(missingNumber(nums));
