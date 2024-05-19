
var compress = function(chars) {

    let ans=[]
    let i=0;
    let j=0;

    while(i<chars.length){
        count=1
        // j=i
        ans[i]=chars[i]
        let curr=chars[i]
        console.log(curr);
        while(curr ==chars[i+1] && chars[i+1]!=undefined){
            count++
            i++
            j++
        }
        j++
        ans[i]=String(count)
        console.log(ans,i,count);
         i++
       


    }
    return ans.filter((a)=>a!=undefined)
    
};
const a=compress(["a","a","b","b","b","c","c","c","c"]);
console.log(a);