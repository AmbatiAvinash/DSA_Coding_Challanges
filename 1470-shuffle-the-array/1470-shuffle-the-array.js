/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res = [];
    let len = nums.length;
    for(let i=0; i<n; i++){
      res.push(nums[i]);
      res.push(nums[n+i]);
    }
    return res;
};