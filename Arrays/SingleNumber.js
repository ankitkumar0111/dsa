function singleNumber(nums) {
  let n=0;
  for (let i = 0; i < nums.length; i++) {
    n = n ^ nums[i];
  }
  return n;
}

let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
