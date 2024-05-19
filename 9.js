var moveZeroes = function(nums) {
let ans=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]==0){
            // nums.splice(i, 1); 
            ans.push()
            console.log(nums);
            // count++
            nums.push(0)
            i--
            // console.log(nums);
        }
    }
    // for(i=0;i<count;i++){
    //     nums.push(0)
    // }
    return nums
    
};

const a=moveZeroes([0,0,1]);
console.log(a);