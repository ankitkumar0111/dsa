function maxConsecutiveOnes(nums){
    let c=0;
    let max=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]==1){
            c++
            max = Math.max(max, c)
        }
        else{
            c=0;
        }
    }
    return max;
}

let arr= [1,1,0,1,1,1];

console.log(maxConsecutiveOnes(arr))