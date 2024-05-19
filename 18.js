var largestAltitude = function(gain) {
    let ans=0;
    let max=0;
    console.log('a');
    console.log(gain.length);
    for(let i=0;i<gain.length;i++){
        console.log(gain[i]);
        ans +=gain[i];
        console.log(ans);
        max=Math.max(max,ans)

    }
    return max
    
};

const a=largestAltitude([-5,1,5,0,-7]);
console.log(a);