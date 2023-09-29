/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let res1 = true;
  let res2 = true;
  let n = nums.length;
   for(let i=0; i<n-1; i++){
     if(nums[i] > nums[i+1]){
       res1 = false;
     }
     if(nums[i] < nums[i+1]){
       res2 = false;
     }
   }
  return (res1 || res2);
    
};