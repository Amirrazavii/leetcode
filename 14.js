/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxValue=0
    for(let i=0;i +k<=s.length;i++){
    let  count=0;
 
     let testarr=s.slice(i,i+k)
     for(let j=0;j<testarr.length;j++){
         let val=vowels.includes(testarr[j]);
         if(val==true){
             count++
         }
     }
      maxValue= Math.max(maxValue,count)
 
    }
    return maxValue
     
 };