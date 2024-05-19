// find without sorting
var findKthLargest = function(nums, k) {
    const obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        }else{
            obj[nums[i]]=1;
        }
    }
    let arr=Object.keys(obj).sort((a,b)=>b-a);
    return arr[k-1];

    

    
};