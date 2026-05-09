function palindrome(n) {
  if (n < 0) {
    return false;
  }
  let temp = n;
  let rev = 0,
    rem = 0;
  while (temp > 0) {
    rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }

  return rev == n;
}

let num = 121;

console.log(palindrome(num));
