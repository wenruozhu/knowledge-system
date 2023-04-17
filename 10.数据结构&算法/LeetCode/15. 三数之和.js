// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
function threeSum(nums) {
  //   nums.map((item) => {});
  for (let i = 0; i < nums.length; i++) {
    let item1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let item2 = nums[j];
      for (let k = j; k < nums.length; k++) {
        let item3 = nums[k];
        if (item1 + item2 + item3 === 0) {
          //  && item1 != item2 && item2 != item3 && item1 != item3
          console.log(item1, item2, item3);
          //   return [item1, item2, item3];
        }
      }
    }
  }
  return [
    []
  ];
}
threeSum([-1, 0, 1, 2, -1, -4]);