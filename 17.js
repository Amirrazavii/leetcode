/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(arr) {
    let max = 0;
    let deleted = 0;
    let l = 0;
    let r = 0;
    let start=0;

    while(start < arr.length) {
        if(arr[r]==1){
            l++
            r++
        }else if(arr[r]==0 &&deleted !=1){
            l++
            deleted=1
            r++

        }else{
            max=Math.max(max,l)
            console.log(max);
            start++
            r=start
            deleted=0
            l=0
        }
    }

    return max -1
};

const a=longestSubarray([0,1,1,1,0,1,1,0,1]);
console.log(a);