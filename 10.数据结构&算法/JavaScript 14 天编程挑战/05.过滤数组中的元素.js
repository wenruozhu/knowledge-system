/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// 未做出
var filter = function(arr, fn) {
  const nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) nums.push(arr[i]);
  }
  return nums;
};

const arr = [0, 10, 20, 30],
  fn = function greaterThan10(n) {
    return n > 10;
  };
console.log(filter(arr, fn));
