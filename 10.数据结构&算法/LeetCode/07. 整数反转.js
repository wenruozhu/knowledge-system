/**
 * @param {number} x
 * @return {number}
 */
let x1 = 123,
  x2 = -123,
  x3 = 120,
  x4 = 0;
var reverse = function (x) {
  let max = Math.pow(2, 31) - 1,
    min = -Math.pow(2, 31),
    flag = x > 0 ? 1 : x == 0 ? 0 : -1;
  // console.log(x);
  let reverseNum = String(Math.abs(x)).split("").reverse().join("") * flag;
  // if (x > 0) {
  //     reverseNum = String(x).split('').reverse().join('')
  // } else if (x == 0) {
  //     reverseNum = 0
  // } else {
  //     reverseNum = - (String(x).split('').reverse().join(''))
  // }
  if (reverseNum > max) return 0;
  if (reverseNum < min) return 0;
  return Number(reverseNum);
};
console.log(reverse(x1));
console.log(reverse(x2));
console.log(reverse(x3));
console.log(reverse(x4));
