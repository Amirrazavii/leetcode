/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans=''
    let length=Math.max(word1.length,word2.length);
    console.log(length);
    for(let i=0;i<length;i++){
        if(word1[i]!==undefined){

        ans +=word1[i];
        }if(word2[i]!==undefined){
         ans +=word2[i];

        }
    }
    return ans
    
}