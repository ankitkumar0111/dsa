function bubbleSort(nums){
    let n = nums.length
    for(let i=0; i<n; i++){
        let swapped = false
        for(let j=0; j<n-1-i; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                swapped = true
            }
        }
        // if after any iteration no swapping happens we have to stop bubble sort
        if(!swapped){
            break;
        }
    }
    return nums;
}

const nums = [5,1,2,3,4]
console.log(bubbleSort(nums));
