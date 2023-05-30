/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// 未做出
var reduce = function(nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};
const nums = [1, 2, 3, 4],
  fn = function sum(accum, curr) {
    return accum + curr * curr;
  },
  init = 100;

console.log(reduce(nums, fn, init));
