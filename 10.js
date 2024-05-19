/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j =0
    let i =0
   while(i<t.length){
    if(s[j] == t[i]){
        j++
        i++
    }else{
        i++

    }
    console.log(j)
    if(j==s.length){
        
        return true

    }
   }
  return false  
};

const a=isSubsequence('abc','ahbgdc');
console.log(a);