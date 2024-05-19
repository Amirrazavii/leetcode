// var uniqueOccurrences = function(arr) {
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         if (obj[arr[i]]){
//             obj[arr[i]]++

//         }else{
//             obj[arr[i]]=1

//         }
//     }
//     console.log(obj);

//     let listkey=Object.values(obj);
//     console.log(listkey);
//     for(let i=0;i<listkey.length;i++){
//         const a=listkey.slice(i +1).includes(listkey[i])
//         console.log(a);
//         if(a){
//             return false
//         }
//     }
//     return true
    
// };

var uniqueOccurrences=function(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]]=1
        }
    }
    console.log(obj);
    let listkey=Object.values(obj);
    console.log(listkey);
    for(let i=0;i<listkey.length;i++){
        const a=listkey.slice(i+1).includes(listkey[i]);
        console.log(a);
        if(a){
            return false
        }
    }
    return true
}

const a=uniqueOccurrences([1,2,2,1,1,3]);
console.log(a);