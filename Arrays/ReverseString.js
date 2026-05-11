function reverseString(nums) {
  let i = 0,
    j = nums.length - 1;
  let temp;
  while (i < j) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
  return nums;
}

let s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s));
