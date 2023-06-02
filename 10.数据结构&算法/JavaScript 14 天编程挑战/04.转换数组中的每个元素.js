/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  return Array.from(arr, fn);
};
const arr = [1, 2, 3],
  fn = function plusone(n) {
    return n + 1;
  };
console.log(map(arr, fn));
