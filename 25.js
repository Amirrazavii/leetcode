var asteroidCollision = function(asteroids) {
    const arr=[];

    for(let i=0;i<asteroids.length;i++){
        if(asteroids[i]> 0 || arr.length ==0){
             arr.push(asteroids[i]);

        }
        else{
            while(true){
                const top=arr[arr.length-1];
                if(top<0){
                    arr.push(asteroids[i]);
                    break;
                }
                else if(top==-asteroids[i]){
                    arr.pop();
                    break;
                }
                else if(top>-asteroids[i]){
                    break;
                }
                else{
                    arr.pop();
                    if(arr.length==0){
                        arr.push(asteroids[i]);
                        break;
                    }
            }
         
        }
    }
}
return arr;
}

const a=asteroidCollision([5,10,-5]);
console.log(a);