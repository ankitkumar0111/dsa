function buyAndSellStock(nums) {
  let min = nums[0];
  let maxProfit = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    } else if (nums[i] - min > maxProfit) {
      maxProfit = nums[i] - min;
    }
  }
  return maxProfit;
}

let arr = [7, 1, 5, 3, 6, 4, 0, 8];

console.log(buyAndSellStock(arr));
