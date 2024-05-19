var canPlaceFlowers = function(flowerbed, n) 
{

for(let i=0;i<flowerbed.length;i++){
    if(flowerbed[i] !=1 &&  flowerbed[i-1]!=1 && flowerbed[i+1]!=1 ){
        flowerbed[i] = 1
        n--
    }
}
return n <=0
}


const flowerbed=[0,0,1,0,1];

console.log(flowerbed,1);
