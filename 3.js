/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=Math.max(...candies);
    let ans=[]
    let o=0
    for(let i of candies){
        if(i+extraCandies<max){
          ans.push(false)
        }else{
            ans.push(true)
            o++
        }

    }
    return ans
    
};