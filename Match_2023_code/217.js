var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};
// var containsDuplicate = function(nums) {
//     const m = new Map()
//     for(let i = 0; i < nums.length; i++) {
//         if(m.has(nums[i])) {
//             return true
//         }
//         m.set(nums[i], i)
//     }
//     return false
// };
