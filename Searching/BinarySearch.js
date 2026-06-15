function binarySearch(nums, target){
    var l=0, r=nums.length-1;
    var m;
    while(l <= r){
        m = Math.floor((l+r)/2)
        if(nums[m] == target){
            return m
        }
        else if(target > nums[m]){
            l = m+1
        }
        else{
            r = m-1;
        }
    }
    return -1
}

const nums = [0, 3, 6, 8, 10, 14 , 16 , 19]
const target = 14

console.log(binarySearch(nums, target));
