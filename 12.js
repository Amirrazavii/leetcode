var maxOperations = function(nums, k) {
    
    const obj={}

    let count=0
    for(let num of nums){

        let x=k-num

        if(obj[x]>=1){
            obj[x]--
            count++
        }
        else{
            obj[num]=obj[num]
            obj[num]=(obj[num]||0)+1
        }
    
  };
}