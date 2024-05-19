// /**
//  * @param {number[]} piles
//  * @param {number} h
//  * @return {number}
//  */
// var minEatingSpeed = function(piles, h) {
//     let max=Math.max(...piles);
//     let min=Math.min(...piles);
//     let ans= Infinity
//     let time=h
//     for(let i=max;i>=min;i--){
//         let count=0
//         let j=0;
   

//         for(;j<piles.length;j++){
//             if(time - Math.ceil(piles[j]/i)>0){
//             let ty=Math.ceil(piles[j]/i)
//             time =h-ty
//             console.log(time);
            
//         }else{
//             console.log("asdda");
//             j--
//             break
//         }
//     }
//     if(j == piles.length){
//         // console.log(i);
//         ans=Math.min(ans,i)
        
//     }
    
// };
// return ans
// }
// const piles = [3,6,7,11]
// const h = 8
// console.log(minEatingSpeed(piles,h))

function minEatingSpeed(piles, h) {
    let left = 1; // minimum 1 banana should be eaten per hour, otherwise no progress
    let right = Math.max(...piles); // at max, max(piles) bananas are required to be eaten per hour
    let mid = Math.floor((left + right) / 2); // mid will be the speed of eating
    let k = Infinity;

    // Binary Search
    while(left <= right) {
        let sum = 0; // sum is the total time required to finish all bananas at speed of mid

        for(let i = 0; i < piles.length; i++) {
            sum = sum + Math.ceil(piles[i] / mid);
        }

        if(sum <= h) {
            k = Math.min(k, mid);
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
    }

    return k;
};