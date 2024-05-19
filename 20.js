var findDifference = function(nums1, nums2) {
    let arr=Array.from({length:2},()=>[])
    let set1=new Set();
    let set2=new Set();

    for(let i = 0; i < nums1.length; i++){
  
        if(!nums2.includes(nums1[i])){
            set1.add(nums1[i])
        }
    }
    for(let i = 0; i < nums2.length; i++){
        if(!nums1.includes(nums2[i])){
            set2.add(nums2[i])
        }
    }
    arr = [[...set1],[...set2]];

    return arr
    
    
};
const a=findDifference([1,2,3],[1,2,4]);

console.log(a);