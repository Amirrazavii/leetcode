/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let max=0
    let nummax=-Infinity
    for(let i=0;i <nums.length;i++){
        if(nums[i]>nummax){
            console.log(nums[i])
            nummax=nums[i]
            max=i
        }
    }
    return max
    
};