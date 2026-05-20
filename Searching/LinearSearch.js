function linearSearch(nums, target){
    for(let i =0; i<nums.length; i++){
        if(nums[i] == target){
            return i;
        }
    }
    return -1
}

const nums = [5,4,3,0,1]
let target = 0
console.log(linearSearch(nums, target));
