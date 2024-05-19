var closestring = function(word1, word2) {
    const obj1={};
    const obj2={};

    for(let i=0;i<word1.length;i++){
        // let x =k- a[i];
        // obj[x] =1;
        if(obj1[word1[i]]){
            obj1[word1[i]]++;
        }else{
         obj1[word1[i]] =1;
 
        }
     
    }
    for(let i=0;i<word2.length;i++){
        // let x =k- b[i];
       if(obj2[word2[i]]){
           obj2[word2[i]]++;
       }else{
        obj2[word2[i]] =1;

       }
    }
    let arr1=Object.keys(obj1).sort().toString();
    let arr2=Object.keys(obj2).sort().toString();
    let val=Object.values(obj1).sort().toString();
    let val2=Object.values(obj2).sort().toString();
    if(arr1===arr2 && val===val2){
        return true;
    }
    return false;



   
} 

const a=closestring('abc','bca');
console.log(a);