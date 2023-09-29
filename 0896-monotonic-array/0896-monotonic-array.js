/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let res1 = 1;
  let res2 = 1;
  let n = nums.length;
   for(let i=0; i<n-1; i++){
     if(nums[i] <= nums[i+1]){
       res1+=1;
     }
     if(nums[i] >= nums[i+1]){
       res2+=1;
     }
   }
  return (res1 === n || res2 === n);
    
};