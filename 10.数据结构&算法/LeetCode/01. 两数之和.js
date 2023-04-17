/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双重for循环
// let twoSum = function (nums, target) {
//     let arrIndex = []; //数组下标
//     for (let i = 0, len = nums.length; i < len; i++) {
//         for (let j = i + 1, len = nums.length; j < len; j++) {
//             if (nums[i] + nums[j] == target) {
//                 arrIndex[0] = i;
//                 arrIndex[1] = j;
//                 return arrIndex
//             }
//         }
//     }
// };
// 哈希表
let twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
            console.log(map)
        }
    }
    return []
};
// 输入： nums = [2, 7, 11, 15], target = 9
// 输出：[0, 1]
console.log(twoSum([2, 7, 11, 15], 9))
// 输入： nums = [3, 2, 4], target = 6
// 输出：[1, 2]
// console.log(twoSum([3, 2, 4], 6))
// 输入： nums = [3, 3], target = 6
// 输出：[0, 1]
// console.log(twoSum([3, 3], 6))