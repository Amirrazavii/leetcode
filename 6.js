// var productExceptSelf = function(nums) {
//     let ans=Array.from({length:nums.length},()=>  1)
//     console.log(ans);
    

//     for(let i=0;i<nums.length;i++){
//        for(let j=0;j<nums.length;j++){
//         if(!(i===j)){
//             ans[i] *=nums[j]
//         }
//         // ans[i] *=num[i]
//        }
        
//     }
//     return ans
    
// };
var productExceptSelf = function(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    // console.log(n);

    for (let i = 1; i < n; i++) {
        // console.log(i);
        // console.log('p');
        // console.log(left[i]);
        console.log(left[i - 1]);
        console.log(nums[i - 1]);
        left[i] = left[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = left[i] * right[i];
    }
    console.log(left);
    console.log(right);
}

const a=productExceptSelf([-1,1,0,-3,3]);
// console.log(a);