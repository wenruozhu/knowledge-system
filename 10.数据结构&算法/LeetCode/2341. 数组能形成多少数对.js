/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 双重for循环
/* var numberOfPairs = function (nums) {
    let pairCount = 0;
    if (nums.length < 1) {
        return [0, 1]
    }
    // let map = new Map()
    for (let i = nums.length; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            console.log('i&j', i, j)
            if (nums[i] == nums[j]) {
                pairCount++
                nums.splice(i, 1)
                nums.splice(j, 1)
            }
        }
    }
    // console.log(pairCount)
    return [pairCount, nums.length]
}; */
// 哈希表
var numberOfPairs = function (nums) {
    const cnt = new Map();
    let res = 0;
    for (const num of nums) {
        cnt.set(num, !(cnt.get(num) || false));
        if (!cnt.get(num)) {
            res++;
        }
        console.log('cnt', cnt)
    }
    return [res, nums.length - 2 * res];
};
console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]))
