function reverseInteger(n){
    let nCopy = n
    let rev =0, rem =0;
    n = Math.abs(n)
    while(n > 0){
        rem = n % 10;
        rev = 10*rev + rem;
        n = Math.floor(n/10)
    }
    let limit = Math.pow(2, 31)
    if(rev < -limit || rev > limit-1) return 0;
   return (nCopy < 0) ? -rev : rev;
}

let num = 5324316999;

console.log(reverseInteger(num));
