function moveZeroes(nums){
    let j=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !=0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++
        }
    }
    return nums;
}

let nums = [1,0,3,2,0,9]

console.log(moveZeroes(nums));
