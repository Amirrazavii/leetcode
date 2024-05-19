/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let subarr=[]
    let max=-Infinity
    for(let i=0; i+k<=nums.length;i++){
       
        subarr=nums.slice(i,i+k);
        console.log(subarr);
         max = Math.max(max,subarr.reduce((a,b)=> a+b,0))
         console.log(max);
        //  console.log(max / k);

    }
    return max/k
    
};

const a=findMaxAverage([1,12,-5,-6,50,3],4);
console.log(a);


