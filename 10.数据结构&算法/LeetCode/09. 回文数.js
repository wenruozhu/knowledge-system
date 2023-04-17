/**
 * @param {number} x
 * @return {boolean}
 */
let x1 = 121,
  x2 = -121,
  x3 = 10,
  x4 = -101;
var isPalindrome = function (x) {
  // 反转后的数字
  let reverseNum = x.toString().split("").reverse().join("");
  if (x == reverseNum) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(x1));
console.log(isPalindrome(x2));
console.log(isPalindrome(x3));
console.log(isPalindrome(x4));
