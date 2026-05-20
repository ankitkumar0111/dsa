// function printNumbers(n){
//     if(n==0){
//         return;
//     }
//     console.log(n)
//      printNumbers(n-1)
// }

// console.log(printNumbers(5));

let n=5
function printNumbers(x){
    if(x > n){
        return;
    }
    console.log(x)
    return  printNumbers(x + 1)
}

console.log(printNumbers(1));