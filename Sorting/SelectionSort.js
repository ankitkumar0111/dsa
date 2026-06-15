function insertionSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (nums[min] > nums[j]) {
          min = j;
        }
      }
      if (min != i) {
        [nums[i], nums[min]] = [nums[min], nums[i]];
      }
    }
    return nums;
  }
  
  const nums = [5, -10, -4, 9, 1, 5, 3];
  
  console.log(insertionSort(nums));
  