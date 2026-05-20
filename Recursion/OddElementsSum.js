function oddElementsSum(n){
if(n == arr.length){
    return 0;
}
return arr[n] %2 != 0 ? arr[n] + oddElementsSum(n+1) : oddElementsSum(n+1)
}

const arr = [5,4,3,0,1]

console.log(oddElementsSum(0));
