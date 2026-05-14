function mergeSortedArrays(nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1>=0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}

let arr1 = [2, 5, 9, 0, 0, 0];
let m = 3;
let arr2 = [1, 4, 8];
let n = arr2.length;

console.log(mergeSortedArrays(arr1, m, arr2, n));
